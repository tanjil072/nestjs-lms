import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from '../user.types';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Optional()
  _id?: string;

  @Prop({ required: true })
  fname: string;

  @Prop({ required: true })
  lname: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: UserRole.STUDENT })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
