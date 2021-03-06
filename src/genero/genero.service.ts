import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { handleError } from "src/utils/handle-error";
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

  async findById(id: string):Promise<Genero>{
    const record = await this.prisma.generos.findUnique({ where: { id } });

    if (!record) {
      throw new NotFoundException(`registro com ${id} não encontrado.`)
    }

    return record
  }

  async findOne(id: string):Promise<Genero>{
   return this.findById(id)
  }

   async create(generosDto: CreateGenerosDto):Promise<Genero>{
      const genero = await this.prisma.generos.findUnique({
        where: {
          Name: generosDto.Name,
        }
      })
      if (genero){
        throw new NotFoundException('Gênero ja cadastrado')
      }
      const data: Genero = {...generosDto};
    return this.prisma.generos.create({data}).catch(handleError)
  }

  async update(id: string, generosDto: UpdateGenerosDto): Promise<Genero> {
    await this.findById(id)

    const data: Partial<Genero> = {...generosDto}

    return this.prisma.generos.update({
      where: { id },
      data,
    }).catch(handleError)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.generos.delete({where: { id }})
  }
}
