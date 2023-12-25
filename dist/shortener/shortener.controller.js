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
exports.ShortenerController = void 0;
const common_1 = require("@nestjs/common");
const shortener_service_1 = require("./shortener.service");
const create_url_dto_1 = require("./dto/create-url.dto");
let ShortenerController = class ShortenerController {
    constructor(shortenerService) {
        this.shortenerService = shortenerService;
    }
    async shortenUrl(createUrlDto) {
        const res = await this.shortenerService.shortenUrl(createUrlDto.originalUrl);
        return res;
    }
    async getOriginalUrl(shortUrl) {
        const originalUrl = await this.shortenerService.getOriginalUrl(shortUrl);
        return { url: originalUrl || '/', statusCode: 302 };
    }
};
exports.ShortenerController = ShortenerController;
__decorate([
    (0, common_1.Post)('shorten'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_url_dto_1.CreateUrlDto]),
    __metadata("design:returntype", Promise)
], ShortenerController.prototype, "shortenUrl", null);
__decorate([
    (0, common_1.Get)(':shortUrl'),
    __param(0, (0, common_1.Param)('shortUrl')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShortenerController.prototype, "getOriginalUrl", null);
exports.ShortenerController = ShortenerController = __decorate([
    (0, common_1.Controller)('api/shortener'),
    __metadata("design:paramtypes", [shortener_service_1.ShortenerService])
], ShortenerController);
//# sourceMappingURL=shortener.controller.js.map