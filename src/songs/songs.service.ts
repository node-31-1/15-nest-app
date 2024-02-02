import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';
import { CreateSongDto } from './dtos/create-song.dto';
import { UpdateSongDto } from './dtos/update-song.dto';

@Injectable()
export class SongsService {

    constructor(
        @InjectRepository(Song)
        private songRepository: Repository<Song>
    ) {}

    async getAll() {
        const songs = await this.songRepository.find();
        return songs;
    }

    async create(createSongDto: CreateSongDto) {
        const song = this.songRepository.create(createSongDto);
        await this.songRepository.save(song);
        return song;
    }

    async getOne(id: number) {
        const song = await this.songRepository.findOneBy({ id });
        return song;
    }

    async update(id: number, updateSongDto: UpdateSongDto) {
        const song = await this.songRepository.preload({
            id, ...updateSongDto,
        });
        if (!song) throw new NotFoundException('Song not found');
        await this.songRepository.save(song);
        return song;
    }
}
