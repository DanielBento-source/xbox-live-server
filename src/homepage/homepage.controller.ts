import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { HomepageService } from './homepage.service';

@ApiTags('homepage')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('homepage')
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}
  @Get(':id')
  @ApiOperation({
    summary: 'mostrar homepage do perfil atual',
  })
  findOne(@Param('id') id: string) {
    return this.homepageService.findOne(id);
  }
}