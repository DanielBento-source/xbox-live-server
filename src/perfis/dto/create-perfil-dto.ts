import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePerfisDto {
  @IsString()
  Title: string;

  @IsString()
  ImageURL: string;
}
