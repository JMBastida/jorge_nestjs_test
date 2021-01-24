import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UpdateRecordDTO } from './models/updateRecords.dto';
import { User } from './models/user-view.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().exec();
    console.log(users);

    return users;
  }

  async findOne(id: string, offsetDate: Date, limitDate: Date): Promise<User> {
    const offsetTime = new Date(offsetDate).getTime();
    const limitTime = new Date(limitDate).getTime();
    console.log(offsetTime);
    console.log(limitTime);

    const user = await this.userModel
      .aggregate([
        {
          $unwind: '$timeRecords',
        },
        {
          $match: {
            clientId: id,
            'timeRecords.online': {
              $gte: offsetTime,
            },
            'timeRecords.offline': {
              $lte: limitTime,
            },
          },
        },
        {
          $group: {
            _id: '$_id',
            clientId: { $first: '$clientId' },
            timeRecords: { $push: '$timeRecords' },
          },
        },
        { $project: { _id: 0 } },
      ])
      .exec();

    console.log(user);

    return user;
  }

  async update(id: string, user: UpdateRecordDTO): Promise<any> {
    const currentDay = new Date();
    const times = {
      date: currentDay.toDateString(),
      timeRecords: [{ online: user.initTime, offline: user.finishTime }],
    };
    return await this.userModel.updateOne({ _id: id }, { $set: times });
  }
}
