import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { handleError } from "src/utils/handle-error";
import { CreatePerfisDto } from "./dto/create-perfil-dto";
import { UpdatePerfisDto } from "./dto/update-perfil-dto";
import { UpdatePerfilJogosDto } from "./dto/update-perfil-jogos-dto";
import { Perfil } from "./entidades/perfil.entidade";

@Injectable()
export class PerfisService{

  constructor(private readonly prisma: PrismaService){
  }

  findAll():Promise<Perfil[]>{
    return this.prisma.perfis.findMany({
      select:{
        id: true,
        ImageURL: true,
        Title: true,
        jogos:{
          select:{
            jogos:{
              select:{
                 Title: true,
              }
            }
          }
        },
        usuarios:{
          select:{
            Name: true
          }
        }
      }
    });
  }

  async findById(id: string):Promise<Perfil>{
    const record = await this.prisma.perfis.findUnique({ where: { id },
    include:{
      usuarios: {
        select:{
          Name: true,
        }
      },
      jogos:{
        select:{
          jogos:{
            select:{
               Title: true,
            }
          }
        }
      },

    } });

    if (!record) {
      throw new NotFoundException(`registro com ${id} não encontrado.`)
    }

    return record}

  async findOne(id: string):Promise<Perfil>{
    return this.findById(id)
  }

    create(createPerfisDto: CreatePerfisDto){
      const data: Prisma.PerfisCreateInput = {
         Title: createPerfisDto.Title,
         ImageURL: createPerfisDto.ImageURL,
         jogos: {
           createMany: {
             data: createPerfisDto.JogosId.map((createPerfilJogosDto) => ({
              jogosId: createPerfilJogosDto.jogosId,
              descricao: createPerfilJogosDto.descricao,
            }))
           }},
         usuarios: {
           connect: {
            id: createPerfisDto.UsuariosId
           }
         }

      }

      return this.prisma.perfis.create({
        data,
        select:{
          id: true,
          ImageURL: true,
          Title: true,
          jogos:{
            select:{
              jogos:{
                select:{
                   Title: true,
                }
              }
            }
          },
          usuarios:{
            select:{
              Name: true
            }
          }
        }

      }).catch(handleError)
  }

  async update(id: string, updatePerfisDto: UpdatePerfisDto & UpdatePerfilJogosDto): Promise<Perfil> {
    await this.findById(id)

    const data: Prisma.PerfisUpdateInput = {
      Title: updatePerfisDto.Title,
      ImageURL: updatePerfisDto.ImageURL,
      jogos: {
           createMany: {
             data: updatePerfisDto.JogosId.map((updatePerfilJogosDto) => ({
              jogosId: updatePerfilJogosDto.jogosId,
              descricao: updatePerfilJogosDto.descricao,
            }))
           }},
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
