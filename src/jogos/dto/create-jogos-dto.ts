import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateJogosDto {
  @IsString()
  Title: string;

  @IsString()
  CoverImageUrl: string;

  @IsString()
  Description: string;

  @IsInt()
  Year: number;

  @IsInt()
  ImdbScore: number;

  @IsString()
  GameplayYouTubeUrl: string;

  @IsString()
  TrailerYouTubeUrl:  string;
}
