import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, IsUUID } from "class-validator";

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

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'Id do usuario',
    example: 'asfdx52xq62xdqwd51cq5ef1ce5f1',
  })
  UsuariosId: string;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'lista de Id dos Jogos',
    example: '[asfdx52xq62xdqwd51cq5ef1ce5f1,  sfcwefcewcwecqcqce5cqwce85fc1e]',
  })
  JogosId: string[];

}
