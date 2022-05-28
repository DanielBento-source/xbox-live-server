import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePerfisDto {
  @IsString()
  @ApiProperty({
    description: 'titulo do perfil',
    example: 'Pai',
  })
  Title: string;

  @IsString()
  @ApiProperty({
    description: 'endereço da imagem do perfil',
    example: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3T9eEHiKYXbob3G0jwXi6xcmL5OlEyZa4yw&usqp=CAU',
  })
  ImageURL: string;
}
