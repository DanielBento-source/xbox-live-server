import { Injectable } from "@nestjs/common";
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

  findOne(id: string):Promise<Perfil>{
    return this.prisma.perfis.findUnique({ where:{ id }})}

    create(perfisDto: CreatePerfisDto):Promise<Perfil>{
      const data: Perfil = {...perfisDto};
    return this.prisma.perfis.create({data})
  }

  update(id: string, perfisDto: UpdatePerfisDto): Promise<Perfil> {
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
