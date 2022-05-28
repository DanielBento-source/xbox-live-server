import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('XboxLive')
    .setDescription('Aplicação para gestão dos jogos em nuvem')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('jogos')
    .addTag('generos')
    .addTag('perfis')
    .addTag('usuarios')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3633);
}
bootstrap();
