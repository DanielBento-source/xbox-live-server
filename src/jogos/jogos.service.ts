import { Injectable, NotFoundException } from "@nestjs/common";
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

    create(createDto: CreateJogosDto):Promise<Jogo>{
      const data: Jogo = {...createDto};
    return this.prisma.jogos.create({ data }).catch(handleError)
  }

  async update(id: string, createDto: UpdateJogosDto): Promise<Jogo> {
    await this.findById(id)

    const data: Partial<Jogo> = {...createDto}

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
