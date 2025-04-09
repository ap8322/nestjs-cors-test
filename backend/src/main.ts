import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const productionWhiteList = [
    'http://localhost:5173',
  ];

  const app = await NestFactory.create(AppModule, {
        cors: {
      origin: (requestOrigin, callback) => {
          if (productionWhiteList.includes(requestOrigin) || !requestOrigin) {
            callback(null, true);
          } else {
            callback(new Error('Not allowed by CORS'), false);
          }
      },
      methods: 'GET,POST',
      credentials: true,
    }
  });
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
