import { Task } from "src/task/entities/task.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {


    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    name : string ;


    @ManyToMany(() => Task, task => task.categories)
    tasks : Task[];
}
