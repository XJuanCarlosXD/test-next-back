import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { DataService } from '../services/data.service';
import { Data } from '../models/data.model';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  async create(@Body() data: Partial<Data>): Promise<Data> {
    return await this.dataService.create(data);
  }

  @Get()
  async findAll(): Promise<Data[]> {
    return await this.dataService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Data> {
    return await this.dataService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() newData: Partial<Data>,
  ): Promise<Data> {
    return await this.dataService.update(id, newData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.dataService.remove(id);
  }
}
