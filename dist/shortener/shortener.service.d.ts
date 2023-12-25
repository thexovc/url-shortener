import { Repository } from 'typeorm';
import { Shortener } from './entities/shortener.entity';
export declare class ShortenerService {
    private readonly shortenerRepository;
    constructor(shortenerRepository: Repository<Shortener>);
    shortenUrl(originalUrl: string): Promise<string>;
    getOriginalUrl(shortUrl: string): Promise<string>;
    randomShortUrl(length: number): Promise<string>;
}
