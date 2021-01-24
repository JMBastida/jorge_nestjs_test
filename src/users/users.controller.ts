import { Body, Controller, Put } from '@nestjs/common';
import { UpdateRecordDTO } from './models/updateRecords.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Put()
  async testing(@Body() updateUserDto: UpdateRecordDTO): Promise<string> {
    await this.userService.update(updateUserDto.clientId, updateUserDto);
    return 'Hola mundo';
  }
}
