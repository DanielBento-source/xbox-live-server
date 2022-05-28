import { Injectable, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
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

    create(generosDto: CreateGenerosDto):Promise<Genero>{
      const data: Genero = {...generosDto};
    return this.prisma.generos.create({data}).catch(this.handleError)
  }

  async update(id: string, generosDto: UpdateGenerosDto): Promise<Genero> {
    await this.findById(id)

    const data: Partial<Genero> = {...generosDto}

    return this.prisma.generos.update({
      where: { id },
      data,
    }).catch(this.handleError)
  }

  async delete(id: string) {
    await this.findById(id)

    await this.prisma.generos.delete({where: { id }})
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n')
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim()
    throw new UnprocessableEntityException(lastErrorLines || "Algum erro ocorreu ao executar a operação")
  }

}
