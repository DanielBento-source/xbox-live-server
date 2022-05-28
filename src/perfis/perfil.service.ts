import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePerfisDto } from "./dto/create-perfil-dto";
import { UpdatePerfisDto } from "./dto/update-perfil-dto";
import { Perfil } from "./entidades/perfil.entidade";

@Injectable()
export class PerfisService{

  constructor(private readonly prisma: PrismaService){
  }

  findAll():Promise<Perfil[]>{
    return this.prisma.perfis.findMany();
  }

  async findById(id: string):Promise<Perfil>{
    const record = await this.prisma.perfis.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`registro com ${id} não encontrado.`)
    }

    return record}

  async findOne(id: string):Promise<Perfil>{
    return this.findById(id)
  }

    create(perfisDto: CreatePerfisDto):Promise<Perfil>{
      const data: Perfil = {...perfisDto};
    return this.prisma.perfis.create({data})
  }

  async update(id: string, perfisDto: UpdatePerfisDto): Promise<Perfil> {
    await this.findById(id)

    const data: Partial<Perfil> = {...perfisDto}

    return this.prisma.perfis.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    await this.prisma.perfis.delete({where: { id }})
  }
}
