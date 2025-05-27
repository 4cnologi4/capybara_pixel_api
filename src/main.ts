import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import type { VercelRequest, VercelResponse } from '@vercel/node';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable URI versioning (e.g., /v1/route, /v2/route)
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v', // Now supports both v1 and v2
  });

  // Enable CORS with options
  app.enableCors({
    origin: true, // Allow all origins (replace with your client URL in production)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies/sessions
  });

  await app.init();
  return app.getHttpAdapter().getInstance();
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (!server) {
    server = await bootstrap();
  }
  return server(req, res);
}