import { PartialType } from "@nestjs/mapped-types";
import { CreateJogosDto } from "./create-jogos-dto";


export class UpdateJogosDto extends PartialType(CreateJogosDto){
  Title: string;
  Year?: number;
  TrailerYouTubeUrl?: string;
  ImdbScore?: number;
  GameplayYouTubeUrl?: string;
  CoverImageUrl?: string;
  Description?: string;
}
