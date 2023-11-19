import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shortener {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  orignalUrl: string;

  @Column()
  shortUrl: string;
}
