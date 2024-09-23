import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // whitelist: true -> DTO에 없는 속성은 거부(hacked by me 녀석이 validator에 도달하지 않음)
      forbidNonWhitelisted: true, // DTO에 없는 속성이 있으면 request 자체를 막음
      transform: true, // request의 형식을 원하는 실제 타입으로 변환(id를 string -> number, 왜냐면 url은 string이기 때문)
    }),
  );
  await app.listen(3000);
}
bootstrap();
