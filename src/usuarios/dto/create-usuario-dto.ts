import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString, IsUUID, isUUID, Matches, MinLength } from "class-validator";

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
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'senha do Login do usuario',
    example: 'RollsRoyce97',
  })
  Password: string;

  @IsString()
  @ApiProperty({
    description: 'senha do Login igual a informada no campo "Password"',
    example: 'RollsRoyce97',
  })
  confirmPassword: string;

  @IsNumber()
  @ApiProperty({
    description: 'cpf do usuario',
    example: '99999999999',
  })
  CPF: number;

  @IsBoolean()
  @ApiProperty({
    description: 'é administrador? ',
    example: 'sim ou não',
  })
  isAdmin: boolean;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'Id dos perfis',
    example: 'asfdx52xq62xdqwd51cq5ef1ce5f1',
  })
  Perfis: string[];

}
