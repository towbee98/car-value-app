import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
@Controller('auth')
export class UsersController {

    constructor(private userService: UsersService){}
    @Post('/signup')
  async  createUser(@Body() body:CreateUserDto){
     const user=  await this.userService.create(body.email, body.password)
    }
}
