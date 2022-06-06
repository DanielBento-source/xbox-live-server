import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateJogosDto } from "./dto/create-jogos-dto";
import { UpdateJogosDto } from "./dto/update-jogos-dto";
import { Jogo } from "./entidades/jogos.entidade";
import { JogosService } from "./jogos.service";

@ApiTags('jogos')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('jogos')
export class JogosController {
  constructor  (private readonly jogosService: JogosService){

  }
  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos'
  })
  findAll(): Promise<Jogo[]>{
    return this.jogosService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um jogo'
  })
  findOne(@Param('id')id: string): Promise<Jogo>{
    return this.jogosService.findOne(id)
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um jogo'
  })
  create(@Body() dto: CreateJogosDto): Promise<Jogo>{
    return this.jogosService.create(dto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um jogo pelo ID'
  })
  update(@Param('id')id: string, @Body() dto: UpdateJogosDto): Promise<Jogo>{
    return this.jogosService.update(id,dto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um jogo pelo ID'
  })
  delete(@Param('id') id: string){
    this.jogosService.delete(id)
  }
}
