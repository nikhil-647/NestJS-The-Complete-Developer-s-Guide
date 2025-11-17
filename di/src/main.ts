import { NestFactory } from '@nestjs/core';
// import { ConfigModule } from './config/config.module';
import { ComputerModule } from './computer/computer.module';

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
