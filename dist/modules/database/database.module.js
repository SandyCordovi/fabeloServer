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
Object.defineProperty(exports, "__esModule", { value: true });
const video_1 = require("./../videos/entity/video");
const project_entity_1 = require("./../project/entity/project.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const images_1 = require("../images/entity/images");
const admin_1 = require("../admin/entity/admin");
let DatabaseModule = class DatabaseModule {
    constructor(connection) {
        this.connection = connection;
    }
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'Sandy',
                password: 'lamisma',
                database: 'fabelodatabase',
                entities: [
                    project_entity_1.ProjectEntity,
                    images_1.Images,
                    video_1.Video,
                    admin_1.Admin
                ],
                synchronize: true
            })
        ]
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map