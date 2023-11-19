import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shortener } from './entities/shortener.entity';
import { nanoid } from 'nanoid';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectRepository(Shortener)
    private readonly shortenerRepository: Repository<Shortener>,
  ) {}

  async shortenUrl(orignalUrl: string): Promise<string> {
    const existingUrl = await this.shortenerRepository.findOne({
      where: {
        orignalUrl,
      },
    });

    if (existingUrl) {
      return existingUrl.shortUrl;
    }

    const shortUrl = nanoid(7);
    const newUrl = this.shortenerRepository.create({ orignalUrl, shortUrl });
    await this.shortenerRepository.save(newUrl);

    return newUrl.shortUrl;
  }

  async getOrignalUrl(shortUrl: string): Promise<string> {
    const url = await this.shortenerRepository.findOne({ where: { shortUrl } });

    if (!url) {
      throw new NotFoundException();
    }

    return url.orignalUrl;
  }
}
