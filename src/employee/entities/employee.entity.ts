import { Project } from './../../project/entities/project.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Employee {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  designation: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @ManyToOne(() => Project, (project) => project.employees)
  @Field(() => Project)
  project: Project;

  @Column()
  @Field(() => String)
  projectId: string;
}
