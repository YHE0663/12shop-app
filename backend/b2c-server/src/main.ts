import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const config = new DocumentBuilder()
    .setTitle('12shop API')
    .setDescription('12shop B2C 서버 API 문서')
    .setVersion('1.0')
    .addTag('12shop')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const PORT = 3000; // ← 3000으로 고정
  const HOST = '127.0.0.1'; // 또는 '0.0.0.0'
  await app.listen(PORT, HOST);
  console.log(`Swagger: http://127.0.0.1:${PORT}/api-docs`);
}
bootstrap();
