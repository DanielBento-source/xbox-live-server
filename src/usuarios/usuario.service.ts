import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUsuariosDto } from "./dto/create-usuario-dto";
import { UpdateUsuariosDto } from "./dto/update-usuario-dto";
import { Usuario } from "./entidades/usuario.entidade";

@Injectable()
export class UsuariosService{

  constructor(private readonly prisma: PrismaService){
  }

  findAll():Promise<Usuario[]>{
    return this.prisma.usuarios.findMany();
  }

  async findById(id: string):Promise<Usuario>{
    const record = await this.prisma.usuarios.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`registro com ${id} não encontrado.`)
    }

    return record}

  async findOne(id: string):Promise<Usuario>{
    return this.findById(id)
  }

    create(usuariosDto: CreateUsuariosDto):Promise<Usuario>{
      const data: Usuario = {...usuariosDto};
    return this.prisma.usuarios.create({data})
  }

  async update(id: string, usuariosDto: UpdateUsuariosDto): Promise<Usuario> {
    await this.findById(id)

    const data: Partial<Usuario> = {...usuariosDto}

    return this.prisma.usuarios.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.usuarios.delete({where: { id }})
  }
}
