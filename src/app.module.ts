import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerosModule } from './genero/genero.module';
import { JogosModule } from './jogos/jogos.module'
import { PerfisModule } from './perfis/perfil.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuario.module';

@Module({
  imports: [UsuariosModule ,PerfisModule, GenerosModule, JogosModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
