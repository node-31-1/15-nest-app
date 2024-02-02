import { Song } from "src/songs/entities/song.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    name: string;

    @OneToMany(() => Song, song => song.album)
    songs: Song[];
}
