import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateUsuariosDto {
  @IsString()
  Name: string;

  @IsString()
  Email: string;

  @IsString()
  Password: string;

  @IsNumber()
  CPF: number;

  @IsBoolean()
  isAdmin: boolean;

}
