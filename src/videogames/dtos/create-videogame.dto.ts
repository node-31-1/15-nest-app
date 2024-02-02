import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateVideogameDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    country: string;

    @IsNumber()
    @Min(1960)
    @Max(new Date().getFullYear())
    releaseYear: number;
}
