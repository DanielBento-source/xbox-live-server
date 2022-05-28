import { PartialType } from "@nestjs/mapped-types";
import { CreatePerfisDto } from "./create-perfil-dto";


export class UpdatePerfisDto extends PartialType(CreatePerfisDto){
    Title?: string;
    ImageURL?: string;
}
