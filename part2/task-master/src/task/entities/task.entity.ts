import { Category } from "src/category/entities/category.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Priority } from "./priority.enum";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id : number ;

    @Column()
    title : string ;

    @Column()
    description : string ;
    
    @Column()
    dueDate : Date ;
    
    @Column()
    completionStatus  : string ;


    // @Column( )
    // priority : 'HIGH' | 'LOW' | 'MEDIUM' ;

    @ManyToMany(() => Category , category => category.tasks , )
    categories : Category[];


}
