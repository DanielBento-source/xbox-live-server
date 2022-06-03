import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GenerosController } from './genero.controller';
import { GenerosService } from './genero.service';

@Module({
  imports: [PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [GenerosController],
  providers: [GenerosService],
})
export class GenerosModule {}
