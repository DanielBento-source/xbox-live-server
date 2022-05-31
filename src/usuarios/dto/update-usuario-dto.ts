import { PartialType } from "@nestjs/swagger";
import { CreateUsuariosDto } from "./create-usuario-dto";


export class UpdateUsuariosDto extends PartialType(CreateUsuariosDto){
  Name: string;

  Email: string;

  Password: string;

  CPF: number;

  isAdmin: boolean;

  Perfis?: string[];
}
