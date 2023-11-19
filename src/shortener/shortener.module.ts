import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortenerController } from './shortener.controller';
import { Shortener } from './entities/shortener.entity';
import { ShortenerService } from './shortener.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shortener])],
  controllers: [ShortenerController],
  providers: [ShortenerService],
})
export class ShortenerModule {}
