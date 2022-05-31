import { Generos } from "@prisma/client";

export class Jogo {
  id?: string;
  Title: string;
  CoverImageUrl: string;
  Description: string;
  Year: number;
  ImdbScore: number;
  TrailerYouTubeUrl: string;
  GameplayYouTubeUrl: string;
  Generos?: Generos[];
}
