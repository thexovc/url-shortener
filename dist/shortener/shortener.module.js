"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortenerModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const shortener_controller_1 = require("./shortener.controller");
const shortener_entity_1 = require("./entities/shortener.entity");
const shortener_service_1 = require("./shortener.service");
let ShortenerModule = class ShortenerModule {
};
exports.ShortenerModule = ShortenerModule;
exports.ShortenerModule = ShortenerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([shortener_entity_1.Shortener])],
        controllers: [shortener_controller_1.ShortenerController],
        providers: [shortener_service_1.ShortenerService],
    })
], ShortenerModule);
//# sourceMappingURL=shortener.module.js.map