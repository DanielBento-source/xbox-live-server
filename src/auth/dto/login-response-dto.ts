import { ApiProperty } from "@nestjs/swagger";
import { Usuario } from "src/usuarios/entidades/usuario.entidade";

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiRGFuaWVsIEJlbnRvNSIsImlhdCI6MTY1NDIwMTM3OSwiZXhwIjoxNjU0Mjg3Nzc5fQ.ZO10GK97im6PedL4E-b6i2s3YPNWmHTORv6vw760RFw'
  })
  token: string;

  @ApiProperty({
    description: 'dados do usuario autenticado',
  })
  usuario: Usuario
}
