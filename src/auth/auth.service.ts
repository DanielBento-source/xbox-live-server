import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-dto';
import { LoginResponseDto } from './dto/login-response-dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,
    private readonly jwtService: JwtService){}

  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { password, Name } = loginDto

    const usuario = await this.prisma.usuarios.findUnique({ where: { Name }})

    if(!usuario){
      throw new UnauthorizedException('credenciais invalidas')
    }

    const isHashValid =  await bcrypt.compare(password, usuario.Password)

    if (!isHashValid){
      throw new UnauthorizedException('credenciais invalidas')
    }

    delete usuario.Password

    return {
      token: this.jwtService.sign({Name}),
      usuario,
    };
  }
}
