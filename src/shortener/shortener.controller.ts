import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('api/shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post('shorten')
  async shortenUrl(@Body() createUrlDto: CreateUrlDto) {
    const res = await this.shortenerService.shortenUrl(
      createUrlDto.originalUrl,
    );
    return res;
  }

  @Get(':shortUrl')
  async getOriginalUrl(@Param('shortUrl') shortUrl: string) {
    const originalUrl = await this.shortenerService.getOriginalUrl(shortUrl);
    return { url: originalUrl || '/', statusCode: 302 };
  }
}
