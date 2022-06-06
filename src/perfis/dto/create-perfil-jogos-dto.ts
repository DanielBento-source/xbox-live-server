import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";

export class CreatePerfilJogosDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do jogo',
    example: "odvnewonencvejrfvbierre2rve26erv2"
  })
  jogosId: string;

  @IsString()
  @ApiProperty({
    description: 'observação do jogo',
    example: "meu favorito"
  })

  descricao: string;
}
