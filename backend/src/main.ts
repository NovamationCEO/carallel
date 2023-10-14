import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { login } from './firebase/FireApp';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: '*',
    origin: '*',
  });
  dotenv.config();

  await login();

  await app.listen(process.env.PORT);
}
bootstrap();
