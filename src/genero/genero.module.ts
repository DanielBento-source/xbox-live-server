import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GenerosController } from './genero.controller';
import { GenerosService } from './genero.service';

@Module({
  imports: [PrismaModule],
  controllers: [GenerosController],
  providers: [GenerosService],
})
export class GenerosModule {}
