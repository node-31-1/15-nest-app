import { IsNotEmpty, IsNumber, IsString, Max, Min, MinLength } from "class-validator";

export class CreateSongDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNumber()
    @Min(1000)
    @Max(4000)
    releaseYear: number;

    @IsString()
    @IsNotEmpty()
    artist: string;

    @IsNumber()
    albumId: number;
}
