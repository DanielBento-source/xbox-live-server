import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateGenerosDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do genero',
    example: 'ação',
  })
  Name: string;
}
