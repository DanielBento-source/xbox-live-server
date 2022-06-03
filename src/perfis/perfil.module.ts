import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PerfisController } from './perfil.controller';
import { PerfisService } from './perfil.service';

@Module({
  imports: [PrismaModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [PerfisController],
  providers: [PerfisService],
})
export class PerfisModule {}
