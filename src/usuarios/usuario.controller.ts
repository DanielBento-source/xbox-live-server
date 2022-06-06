import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateUsuariosDto } from "./dto/create-usuario-dto";
import { UpdateUsuariosDto } from "./dto/update-usuario-dto";
import { Usuario } from "./entidades/usuario.entidade";
import { UsuariosService } from "./usuario.service";

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor  (private readonly usuariosService: UsuariosService){

  }
  @Get()
  @ApiOperation({
    summary: 'Listar todos os usuarios'
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findAll(): Promise<Usuario[]>{
    return this.usuariosService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um usuario'
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  findOne(@Param('id')id: string): Promise<Usuario>{
    return this.usuariosService.findOne(id)
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um usuario'
  })
  create(@Body() usuarioDto: CreateUsuariosDto): Promise<Usuario>{
    return this.usuariosService.create(usuarioDto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um usuario pelo ID'
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  update(@Param('id')id: string, @Body() usuarioDto: UpdateUsuariosDto): Promise<Usuario>{
    return this.usuariosService.update(id,usuarioDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um usuario pelo ID'
  })
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  delete(@Param('id') id: string){
    this.usuariosService.delete(id)
  }
}
