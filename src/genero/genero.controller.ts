import { Body, Controller,Delete,Get, HttpCode, HttpStatus, Param, Patch, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { CreateGenerosDto } from "./dto/create-genero-dto";
import { UpdateGenerosDto } from "./dto/update-genero-dto";
import { Genero } from "./entidades/genero.entidade";
import { GenerosService } from "./genero.service";

@ApiTags('generos')
@Controller('generos')
export class GenerosController {
  constructor  (private readonly generosService: GenerosService){

  }
  @Get()
  @ApiOperation({
    summary: 'Listar todos os generos'
  })
  findAll(): Promise<Genero[]>{
    return this.generosService.findAll()
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Visualizar um genero'
  })
  findOne(@Param('id')id: string): Promise<Genero>{
    return this.generosService.findOne(id)
  }

  @Post()
  @ApiOperation({
    summary: 'Criar um genero'
  })
  create(@Body() generoDto: CreateGenerosDto): Promise<Genero>{
    return this.generosService.create(generoDto)
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Editar um genero pelo ID'
  })
  update(@Param('id')id: string, @Body() generoDto: UpdateGenerosDto): Promise<Genero>{
    return this.generosService.update(id,generoDto)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: 'Deletar um genero pelo ID'
  })
  delete(@Param('id') id: string){
    this.generosService.delete(id)
  }
}
