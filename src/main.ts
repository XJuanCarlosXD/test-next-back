import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;
  const logger = new Logger();
  await app.listen(PORT);
  logger.log(`Application is running on: http://localhost:${PORT}`);
}
bootstrap();
