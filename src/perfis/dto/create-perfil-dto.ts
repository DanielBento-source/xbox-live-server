import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsUrl, IsUUID, ValidateNested } from "class-validator";
import { CreatePerfilJogosDto } from "./create-perfil-jogos-dto";

export class CreatePerfisDto {
  @IsString()
  @ApiProperty({
    description: 'titulo do perfil',
    example: 'Pai',
  })
  Title: string;

  @IsUrl()
  @ApiProperty({
    description: 'endereço da imagem do perfil',
    example: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3T9eEHiKYXbob3G0jwXi6xcmL5OlEyZa4yw&usqp=CAU',
  })
  ImageURL: string;

  @ValidateNested({
    each: true,
  })
  @Type(() => CreatePerfilJogosDto)
  @ApiProperty({
    description: 'lista de Id dos Jogos',
    type: [CreatePerfilJogosDto]
  })
  JogosId: CreatePerfilJogosDto[];

}
