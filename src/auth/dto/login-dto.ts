import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:'Nome do Usuario',
    example: 'Daniel Bento'
  })
  Name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:'Senha do usuario',
    example: 'RollsRoyce97'
  })
  password: string;
}
