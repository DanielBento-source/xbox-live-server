import { PartialType } from "@nestjs/swagger";
import { CreatePerfilJogosDto } from "./create-perfil-jogos-dto";


export class UpdatePerfilJogosDto extends PartialType(CreatePerfilJogosDto){
    JogosId?: CreatePerfilJogosDto[];
}
