import { ShortenerService } from './shortener.service';
import { CreateUrlDto } from './dto/create-url.dto';
export declare class ShortenerController {
    private readonly shortenerService;
    constructor(shortenerService: ShortenerService);
    shortenUrl(createUrlDto: CreateUrlDto): Promise<string>;
    getOriginalUrl(shortUrl: string): Promise<{
        url: string;
        statusCode: number;
    }>;
}
