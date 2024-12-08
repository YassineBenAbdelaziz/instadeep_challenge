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
    const task = this.taskRepository.create(createTaskDto);

    return this.taskRepository.save(task);
  }

  findAll(params) {
      return this.taskRepository.find({
        where: params
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = this.taskRepository.findOne({where : {id}});
    if ( ! task )
        return new NotFoundException("Task Not found")

    return this.taskRepository.save({...updateTaskDto, id});
  }

  remove(id: number) {
    this.taskRepository.delete({id});
  }
}
