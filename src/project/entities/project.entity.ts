import { Employee } from './../../employee/entities/employee.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  code: number;

  @OneToMany(() => Employee, (employee) => employee.project)
  @Field(() => [Employee], { nullable: true })
  employees: Employee[];
}
