import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dtos/create-song.dto';
import { UpdateSongDto } from './dtos/update-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get('')
  getAllSongs() {
    return this.songsService.getAll();
  }

  @Post()
  createSong(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }

  @Get(':id')
  getOneSong(@Param('id') id: string) {
    return `Trayendo la cancion de id ${id}`;
  }

  @Patch(':id')
  updateSong(
    @Param('id') id: string, 
    @Body() updateSongDto: UpdateSongDto
  ) {
    return this.songsService.update(+id, updateSongDto);
  }

}
