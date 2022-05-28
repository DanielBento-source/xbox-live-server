import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';

import { PerfisController } from './perfil.controller';
import { PerfisService } from './perfil.service';

@Module({
  imports: [PrismaModule],
  controllers: [PerfisController],
  providers: [PerfisService],
})
export class PerfisModule {}
