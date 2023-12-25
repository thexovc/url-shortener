"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const shortener_entity_1 = require("./entities/shortener.entity");
let ShortenerService = class ShortenerService {
    constructor(shortenerRepository) {
        this.shortenerRepository = shortenerRepository;
    }
    async shortenUrl(originalUrl) {
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
    async getOriginalUrl(shortUrl) {
        const url = await this.shortenerRepository.findOne({ where: { shortUrl } });
        if (!url) {
            throw new common_1.NotFoundException();
        }
        return url.originalUrl;
    }
    async randomShortUrl(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
};
exports.ShortenerService = ShortenerService;
exports.ShortenerService = ShortenerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(shortener_entity_1.Shortener)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ShortenerService);
//# sourceMappingURL=shortener.service.js.map