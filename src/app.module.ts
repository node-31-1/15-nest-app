import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './songs/songs.module';
import { VideogamesModule } from './videogames/videogames.module';
import { AlbumsModule } from './albums/albums.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    SongsModule,
    VideogamesModule,
    AlbumsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


