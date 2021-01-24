import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateRecordDTO } from './models/updateRecords.dto';
import { User } from './models/user-view.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<any>) {}

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async update(id: string, user: UpdateRecordDTO): Promise<UpdateRecordDTO> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
