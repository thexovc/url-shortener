import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortenerController } from './shortener/shortener.controller';
import { ShortenerService } from './shortener/shortener.service';
import { ShortenerModule } from './shortener/shortener.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ShortenerModule,
  ],
  controllers: [AppController, ShortenerController],
  providers: [AppService, ShortenerService],
})
export class AppModule {}
