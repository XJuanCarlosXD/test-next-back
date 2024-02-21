import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Data } from '../models/data.model';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(Data)
    private readonly dataRepository: Repository<Data>,
  ) {}

  async create(data: Partial<Data>): Promise<Data> {
    const newData = await this.dataRepository.create(data);
    return await this.dataRepository.save(newData);
  }

  async findAll(): Promise<Data[]> {
    return await this.dataRepository.find();
  }

  async findOne(id: number): Promise<Data> {
    return await this.dataRepository.findOne({ where: { id } });
  }

  async update(id: number, newData: Partial<Data>): Promise<Data> {
    await this.dataRepository.update({ id }, newData);
    return await this.dataRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.dataRepository.delete(id);
  }
}
