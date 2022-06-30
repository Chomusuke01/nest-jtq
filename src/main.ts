import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf-noroutes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({ 
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  app.use(cookieParser());
  app.use(csurf({cookie: true, ignoreMethods: ['POST'], ignoreRoutes: ['/csrf/v1/token']}));
  //app.use(csurf({ cookie: { ignoreRoutes: 'login' } }));
  await app.listen(3000);
}

bootstrap();
