import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { CategoryModule } from './category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task/entities/task.entity';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [TaskModule, CategoryModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'tasksSchema.sqlite',
      entities: [Task, Category],
      synchronize: true,
    }),
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
