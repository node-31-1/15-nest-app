import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Videogame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  country: string;

  @Column({
    nullable: false,
  })
  releaseYear: number;
}
