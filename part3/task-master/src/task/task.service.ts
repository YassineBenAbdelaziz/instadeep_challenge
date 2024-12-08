import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {

  constructor( 
    @InjectRepository(Task)
    private taskRepository : Repository<Task>) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.taskRepository.create(createTaskDto);

    return await this.taskRepository.save(task);
  }

  async findAll(params) {
     return await this.taskRepository.find({
        where: params
      });
  }

  async findOne(id: number) {
    return await this.taskRepository.findOne({where : {id}});
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskRepository.findOne({where : {id}});
    if ( ! task )
        return new NotFoundException("Task Not found")

    return await this.taskRepository.save({...updateTaskDto, id});
  }

  async remove(id: number) {
    await this.taskRepository.delete({id});
  }
}
