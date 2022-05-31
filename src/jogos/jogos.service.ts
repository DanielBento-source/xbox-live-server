import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { handleError } from "src/utils/handle-error";
import { CreateJogosDto } from "./dto/create-jogos-dto";
import { UpdateJogosDto } from "./dto/update-jogos-dto";
import { Jogo } from "./entidades/jogos.entidade";

@Injectable()
export class JogosService{

  constructor(private readonly prisma: PrismaService){
  }

  findAll():Promise<Jogo[]>{
    return this.prisma.jogos.findMany();
  }

  async findById(id: string):Promise<Jogo>{

    const record = await this.prisma.jogos.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`registro com ${id} não encontrado.`)
    }

    return record
  }

  async findOne(id: string): Promise<Jogo>{
    return this.findById(id)
  }

    create(jogosCreateDto: CreateJogosDto){
      const data: Prisma.JogosCreateInput = {
        Title: jogosCreateDto.Title,
        CoverImageUrl: jogosCreateDto.CoverImageUrl,
        Description: jogosCreateDto.Description,
        Year: jogosCreateDto.Year,
        ImdbScore: jogosCreateDto.ImdbScore,
        TrailerYouTubeUrl: jogosCreateDto.TrailerYouTubeUrl,
        GameplayYouTubeUrl: jogosCreateDto.GameplayYouTubeUrl,
        generos: {
          connect: jogosCreateDto.Generos.map((generosId) => ({id: generosId,}))
        }
      }
    return this.prisma.jogos.create({ data }).catch(handleError)
  }

  async update(id: string, updateJogosDto: UpdateJogosDto): Promise<Jogo> {
    await this.findById(id)

    const data: Prisma.JogosUpdateInput = {
      Title: updateJogosDto.Title,
        CoverImageUrl: updateJogosDto.CoverImageUrl,
        Description: updateJogosDto.Description,
        Year: updateJogosDto.Year,
        ImdbScore: updateJogosDto.ImdbScore,
        TrailerYouTubeUrl: updateJogosDto.TrailerYouTubeUrl,
        GameplayYouTubeUrl: updateJogosDto.GameplayYouTubeUrl,
        generos: {
          connect: updateJogosDto.Generos.map((generosId) => ({id: generosId,}))
        }
    }

    return this.prisma.jogos.update({
      where: { id },
      data,
    }).catch(handleError)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.jogos.delete({where: { id }})
  }
}
