import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  descrip: string;

  @Column()
  image: string;
}
