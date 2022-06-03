import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreatePerfisDto } from "./dto/create-perfil-dto";
import { UpdatePerfisDto } from "./dto/update-perfil-dto";
import { Perfil } from "./entidades/perfil.entidade";
import { PerfisService } from "./perfil.service";

@ApiTags('perfis')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('perfis')
export class PerfisController {
  constructor  (private readonly perfisService: PerfisService){

  }
  @Get()
  @ApiOperation({
    summary: 'Listar todos os perfis'
  })
  findAll(): Promise<Perfil[]>{
    return this.perfisService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um perfil'
  })
  findOne(@Param('id')id: string): Promise<Perfil>{
    return this.perfisService.findOne(id)
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um perfil'
  })
  create(@Body() perfilDto: CreatePerfisDto): Promise<Perfil>{
    return this.perfisService.create(perfilDto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um perfil pelo ID'
  })
  update(@Param('id')id: string, @Body() perfilDto: UpdatePerfisDto): Promise<Perfil>{
    return this.perfisService.update(id,perfilDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um perfil pelo ID'
  })
  delete(@Param('id') id: string){
    this.perfisService.delete(id)
  }
}
