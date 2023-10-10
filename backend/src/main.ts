import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { login } from './firebase/FireApp';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await login();

  await app.listen(3000);
}
bootstrap();
