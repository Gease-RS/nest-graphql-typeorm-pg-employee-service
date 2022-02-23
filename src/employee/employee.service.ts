import { Employee } from './entities/employee.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmployeeInput } from './dto/create-employee.input';
import { UpdateEmployeeInput } from './dto/update-employee.input';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectService } from 'src/project/project.service';
import { Project } from 'src/project/entities/project.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private projectService: ProjectService,
  ) {}

  create(createEmployeeInput: CreateEmployeeInput): Promise<Employee> {
    let employee = this.employeeRepository.create(createEmployeeInput);
    return this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  findOne(id: string) {
    return this.employeeRepository.findOne(id);
  }

  update(id: string, updateEmployeeInput: UpdateEmployeeInput) {
    return `This action updates a #${id} employee`;
  }

  remove(id: string) {
    return `This action removes a #${id} employee`;
  }

  async getProjects(id: string): Promise<Project> {
    return this.projectService.findOne(id);
  }
}
