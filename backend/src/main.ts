import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { login } from './firebase/FireApp';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  dotenv.config();

  await login();

  await app.listen(process.env.PORT);
}
bootstrap();
