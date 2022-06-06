import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import * as bcrypt from 'bcrypt';
import { PrismaService } from "src/prisma/prisma.service";
import { handleError } from "src/utils/handle-error";
import { CreateUsuariosDto } from "./dto/create-usuario-dto";
import { UpdateUsuariosDto } from "./dto/update-usuario-dto";
import { Usuario } from "./entidades/usuario.entidade";

@Injectable()
export class UsuariosService{
  private usuarioSelect = {
      id: true,
      Name: true,
      Email: true,
      CPF: true,
      Password: false,
      isAdmin: true,
  }

  constructor(private readonly prisma: PrismaService){
  }

  findAll():Promise<Usuario[]>{
    return this.prisma.usuarios.findMany({select:this.usuarioSelect});
  }

  async findById(id: string):Promise<Usuario>{
    const record = await this.prisma.usuarios.findUnique({ where: { id },
    select:this.usuarioSelect, });

    if (!record) {
      throw new NotFoundException(`registro com ${id} não encontrado.`)
    }

    return record}

  async findOne(id: string):Promise<Usuario>{
    return this.findById(id)
  }

   async create(createUsuariosDto: CreateUsuariosDto){
      if (createUsuariosDto.Password != createUsuariosDto.confirmPassword){
        throw new BadRequestException('As senhas informadas não são iguais.')
      }

      delete createUsuariosDto.confirmPassword

      const data: Prisma.UsuariosCreateInput = {
        Name: createUsuariosDto.Name,
        Password: await bcrypt.hash(createUsuariosDto.Password, 10 ),
        CPF: createUsuariosDto.CPF,
        Email: createUsuariosDto.Email,
        isAdmin: createUsuariosDto.isAdmin,
        perfis: {
          connect: createUsuariosDto.Perfis.map((perfilId) => ({
             id: perfilId,
          }))
        }
      }

    return this.prisma.usuarios.create({data, select:this.usuarioSelect }).catch(handleError)
  }

  async update(id: string, usuariosDto: UpdateUsuariosDto): Promise<Usuario> {
    await this.findById(id)

    if(usuariosDto.Password){
      if(usuariosDto.Password != usuariosDto.confirmPassword){
        throw new BadRequestException('As senhas informadas não são iguais.')
      }
    }

    delete usuariosDto.confirmPassword

    const data: Partial<Usuario> = {...usuariosDto}

    if(usuariosDto.Password){
      data.Password = await bcrypt.hash(usuariosDto.Password, 10)
    }

    return this.prisma.usuarios.update({
      where: { id },
      data,
      select:this.usuarioSelect
    }).catch(handleError)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.usuarios.delete({where: { id }})
  }


}
