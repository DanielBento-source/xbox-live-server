import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
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

  findOne(id: string):Promise<Jogo>{
    return this.prisma.jogos.findUnique({ where:{ id }})}

    create(createDto: CreateJogosDto):Promise<Jogo>{
      const data: Jogo = {...createDto};
    return this.prisma.jogos.create({ data })
  }

  update(id: string, createDto: UpdateJogosDto): Promise<Jogo> {
    const data: Partial<Jogo> = {...createDto}

    return this.prisma.jogos.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    await this.prisma.jogos.delete({where: { id }})
  }
}
