import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shortener {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalUrl: string;

  @Column()
  shortUrl: string;
}
