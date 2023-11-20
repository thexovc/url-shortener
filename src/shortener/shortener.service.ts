import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shortener } from './entities/shortener.entity';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectRepository(Shortener)
    private readonly shortenerRepository: Repository<Shortener>,
  ) {}

  async shortenUrl(originalUrl: string): Promise<string> {
    if (!originalUrl) {
      throw new Error('Original URL is required');
    }

    const existingUrl = await this.shortenerRepository.findOne({
      where: {
        originalUrl,
      },
    });

    if (existingUrl) {
      return existingUrl.shortUrl;
    }

    const shortUrl = await this.randomShortUrl(9);
    const newUrl = this.shortenerRepository.create({ originalUrl, shortUrl });
    await this.shortenerRepository.save(newUrl);

    return newUrl.shortUrl;
  }

  async getOriginalUrl(shortUrl: string): Promise<string> {
    const url = await this.shortenerRepository.findOne({ where: { shortUrl } });

    if (!url) {
      throw new NotFoundException();
    }

    return url.originalUrl;
  }

  // generate Short URL
  async randomShortUrl(length: number): Promise<string> {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }
}
