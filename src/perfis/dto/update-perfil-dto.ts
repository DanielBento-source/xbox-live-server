import { PartialType } from "@nestjs/swagger";
import { CreatePerfisDto } from "./create-perfil-dto";


export class UpdatePerfisDto extends PartialType(CreatePerfisDto){
    Title?: string;
    ImageURL?: string;
    UsuariosId: string;
}
