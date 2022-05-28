import { PartialType } from "@nestjs/mapped-types";
import { CreateGenerosDto } from "./create-genero-dto";


export class UpdateGenerosDto extends PartialType(CreateGenerosDto){
  Name: string;
}
