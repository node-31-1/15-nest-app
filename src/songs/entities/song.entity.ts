import { Album } from 'src/albums/entities/album.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  releaseYear: number;

  @Column({
    nullable: false,
  })
  artist: string;

  @Column({
    nullable: true,
  })
  albumId: number;

  @ManyToOne(() => Album, album => album.songs)
  @JoinColumn({ name: 'albumId' })
  album: Album;
}
