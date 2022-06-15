import { Injectable, NotFoundException } from '@nestjs/common';
import { PerfisJogos } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error';

@Injectable()
export class HomepageService {
  constructor(private readonly prisma: PrismaService) {}

  findOne(id: string) {
    return this.prisma.perfis.findUnique({
      where: { id: id },
      select: {
        Title: true,
        ImageURL: true,
        jogos: {
          include: {
            jogos: { select: { generos: { select: { jogos: true } } } },
            perfis: {
              select: {
                jogos: {
                  select: {
                    jogosId: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    const favoritos = this.prisma.perfisJogos;
  }
}
