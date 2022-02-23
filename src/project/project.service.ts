import { Project } from './entities/project.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectInput: CreateProjectInput): Promise<Project> {
    let project = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find({
      relations: ['employees'],
    });
  }

  async findOne(id: string): Promise<Project> {
    return this.projectRepository.findOne(id, {
      relations: ['employees'],
    });
  }

  update(id: string, updateProjectInput: UpdateProjectInput) {
    let project: Project = this.projectRepository.create(updateProjectInput);
    project.id = id;
    return this.projectRepository.save(project);
  }

  async remove(id: string) {
    let project = this.findOne(id);
    if (project) {
      let ret = await this.projectRepository.delete(id);
      if (ret.affected === 1) {
        return project;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }
}
