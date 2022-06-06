import { PartialType } from "@nestjs/swagger";
import { CreateGenerosDto } from "./create-genero-dto";


export class UpdateGenerosDto extends PartialType(CreateGenerosDto){
  Name: string;
}
