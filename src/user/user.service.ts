import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from 'src/auth/dto/registerUser.dto';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(registerUserDto: RegisterDto) {
    // User creation logic goes here
    /**
     * validate user data
     * hash the password
     * save user to the database
     * return user details
     */
    try {
      return await this.userModel.create(registerUserDto);
    } catch (error) {
      const DUPLICATE_KEY_ERROR_CODE = 11000;
      if (error.code === DUPLICATE_KEY_ERROR_CODE) {
        throw new ConflictException('User with this email already exists');
      }
      throw error;
    }
  }
  async fetchUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async getUserById(userId: string): Promise<User | null> {
    return this.userModel.findOne({ _id: userId }).exec();
  }
}
