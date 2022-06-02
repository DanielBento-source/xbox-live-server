import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "src/usuarios/entidades/usuario.entidade";

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'TOKEN_GERADO_AUTOMATICAMNTE'
  })
  token: string;

  @ApiProperty({
    description: 'dados do usuario autenticado',
  })
  usuario: Usuario
}
