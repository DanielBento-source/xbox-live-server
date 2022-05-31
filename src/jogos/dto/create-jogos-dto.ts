import { ApiProperty } from "@nestjs/swagger";
import { Generos } from "@prisma/client";
import { IsInt, IsNumber, IsPositive, IsString, IsUrl, IsUUID } from "class-validator";

export class CreateJogosDto {
  @IsString()
  @ApiProperty({
    description: 'Titulo do jogo',
    example: 'Fifa 2022',
  })
  Title: string;

  @IsUrl()
  @ApiProperty({
    description: 'endereço da imagem de capa do jogo',
    example: 'https://images-na.ssl-images-amazon.com/images/I/81cDqBqJ-gL.__AC_SX300_SY300_QL70_ML2_.jpg',
  })
  CoverImageUrl: string;

  @IsString()
  @ApiProperty({
    description: 'descrição do jogo',
    example: 'JOGABILIDADE a jogabilidade reimaginada cria avanços fundamentais que você vai sentir em todos os modos do FIFA 22',
  })
  Description: string;

  @IsInt()
  @ApiProperty({
    description: 'Ano de lançamento do jogo',
    example: '2022',
  })
  Year: number;

  @IsInt()
  @ApiProperty({
    description: 'avaliação da IMDb',
    example: '5',
  })
  ImdbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'endereço do video de Gameplay do jogo',
    example: '<iframe width="1004" height="565" src="https://www.youtube.com/embed/XlrJ_urwp-Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  })
  GameplayYouTubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'endereço do trailer do jogo',
    example: '<iframe width="1004" height="565" src="https://www.youtube.com/embed/vLj-27T-SEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  })
  TrailerYouTubeUrl:  string;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'Id do usuario',
    example: 'asfdx52xq62xdqwd51cq5ef1ce5f1',
  })
  Generos: string[];
}
