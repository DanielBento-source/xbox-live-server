import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { handleError } from "src/utils/handle-error";
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

    create(perfisDto: CreatePerfisDto){
      const data: Prisma.PerfisCreateInput = {
         Title: perfisDto.Title,
         ImageURL: perfisDto.ImageURL,
         usuarios: {
           connect: {
            id: perfisDto.UsuariosId
           }
         }

      }

      return this.prisma.perfis.create({ data }).catch(handleError)
  }

  async update(id: string, updatePerfisDto: UpdatePerfisDto): Promise<Perfil> {
    await this.findById(id)

    const data: Prisma.PerfisUpdateInput = {
      Title: updatePerfisDto.Title,
         ImageURL: updatePerfisDto.ImageURL,
         usuarios: {
           connect: {
            id: updatePerfisDto.UsuariosId
           }
         }
    }

    return this.prisma.perfis.update({
      where: { id },
      data,
    }).catch(handleError)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.perfis.delete({where: { id }})
  }
}
