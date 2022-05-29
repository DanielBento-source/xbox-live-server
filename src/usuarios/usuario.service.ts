import { BadRequestException, Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUsuariosDto } from "./dto/create-usuario-dto";
import { UpdateUsuariosDto } from "./dto/update-usuario-dto";
import { Usuario } from "./entidades/usuario.entidade";
import * as bcrypt from 'bcrypt';

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

   async create(usuariosDto: CreateUsuariosDto):Promise<Usuario>{
      if (usuariosDto.Password != usuariosDto.confirmPassword){
        throw new BadRequestException('As senhas informadas não são iguais.')
      }

      delete usuariosDto.confirmPassword

      const data: Usuario = {...usuariosDto, Password: await bcrypt.hash(usuariosDto.Password, 10 )};
    return this.prisma.usuarios.create({data}).catch(this.handleError)
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
    }).catch(this.handleError)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.usuarios.delete({where: { id }})
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n')
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim()
    throw new UnprocessableEntityException(lastErrorLines || "Algum erro ocorreu ao executar a operação")
  }
}
