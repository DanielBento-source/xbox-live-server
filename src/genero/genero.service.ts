import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGenerosDto } from "./dto/create-genero-dto";
import { UpdateGenerosDto } from "./dto/update-genero-dto";
import { Genero } from "./entidades/genero.entidade";

@Injectable()
export class GenerosService{

  constructor(private readonly prisma: PrismaService){
  }

  findAll():Promise<Genero[]>{
    return this.prisma.generos.findMany();
  }

  findOne(id: string):Promise<Genero>{
    return this.prisma.generos.findUnique({ where:{ id }})}

    create(generosDto: CreateGenerosDto):Promise<Genero>{
      const data: Genero = {...generosDto};
    return this.prisma.generos.create({data})
  }

  update(id: string, generosDto: UpdateGenerosDto): Promise<Genero> {
    const data: Partial<Genero> = {...generosDto}

    return this.prisma.generos.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    await this.prisma.generos.delete({where: { id }})
  }
}