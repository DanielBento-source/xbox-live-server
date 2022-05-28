import { Injectable } from "@nestjs/common";
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

  findOne(id: string):Promise<Usuario>{
    return this.prisma.usuarios.findUnique({ where:{ id }})}

    create(usuariosDto: CreateUsuariosDto):Promise<Usuario>{
      const data: Usuario = {...usuariosDto};
    return this.prisma.usuarios.create({data})
  }

  update(id: string, usuariosDto: UpdateUsuariosDto): Promise<Usuario> {
    const data: Partial<Usuario> = {...usuariosDto}

    return this.prisma.usuarios.update({
      where: { id },
      data,
    })
  }

  async delete(id: string) {
    await this.prisma.usuarios.delete({where: { id }})
  }
}
