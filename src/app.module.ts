import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Data } from './models/data.model';
import { DataService } from './services/data.service';
import { DataController } from './controller/data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-coopafidb.alwaysdata.net',
      port: 3306,
      username: 'coopafidb',
      password: 'AF2021!',
      database: 'coopafidb_test_db',
      entities: [Data],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Data]),
  ],
  controllers: [AppController, DataController],
  providers: [AppService, DataService],
})
export class AppModule {}
