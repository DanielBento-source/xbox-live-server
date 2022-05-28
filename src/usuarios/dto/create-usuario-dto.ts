import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateUsuariosDto {
  @IsString()
  @ApiProperty({
    description: 'nome do usuario',
    example: 'Daniel Bento',
  })
  Name: string;

  @IsString()
  @ApiProperty({
    description: 'endereço de email do usuario',
    example: 'dsbld3@ig.com.br',
  })
  Email: string;

  @IsString()
  @ApiProperty({
    description: 'senha do usuario',
    example: 'RollsRoyce',
  })
  Password: string;

  @IsNumber()
  @ApiProperty({
    description: 'ecpf do usuario',
    example: '99999999999',
  })
  CPF: number;

  @IsBoolean()
  @ApiProperty({
    description: 'é administrador? ',
    example: 'sim ou não',
  })
  isAdmin: boolean;

}
