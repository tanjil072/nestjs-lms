import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './schemas/course.schema';

@Injectable()
export class CourseService {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(createCourseDto: CreateCourseDto) {
    return this.courseModel.create(createCourseDto);
  }

  async findAll() {
    return this.courseModel.find().exec();
  }

  async findOne(id: string) {
    const course = await this.courseModel.findById(id).exec();
    if (!course) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return course;
  }

  async update(id: string, updateCourseDto: UpdateCourseDto) {
    const updated = await this.courseModel
      .findByIdAndUpdate(id, updateCourseDto, { new: true })
      .exec();
    if (!updated) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.courseModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Course with id ${id} not found`);
    }
    return { deleted: true };
  }
}
