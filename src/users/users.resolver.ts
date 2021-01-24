import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UpdateRecordDTO } from './models/updateRecords.dto';
import { UpdateUserInput } from './inputs/update-user.input';
import { UsersService } from './users.service';
import { User } from './models/user-view.model';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [User])
  async items(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Mutation(() => UpdateRecordDTO)
  async updateItem(
    @Args('id') id: string,
    @Args('input') input: UpdateUserInput,
  ): Promise<UpdateUserInput> {
    const user = {
      id: id,
      online: [
        { timestampOnline: input.initTime, timestampOffline: input.finishTime },
      ],
    };
    return this.userService.update(id, user);
  }
}
