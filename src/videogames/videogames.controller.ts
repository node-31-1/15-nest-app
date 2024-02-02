import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { VideogamesService } from './videogames.service';
import { CreateVideogameDto } from './dtos/create-videogame.dto';
import { UpdateVideogameDto } from './dtos/update-videogame.dto';

@Controller('videogames')
export class VideogamesController {
  constructor(private readonly videogamesService: VideogamesService) {}

  @Get()
  getAll() {
    return "Trayendo todos los videojuegos";
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return "Trayendo el videojuego con id " + id;
  }

  @Post()
  create(@Body() createVideogameDto: CreateVideogameDto) {
    return "Creando videojuego";
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Eliminando el videojuego de id ${id}`;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVideogameDto: UpdateVideogameDto,
  ) {
    return ``
  }
}
