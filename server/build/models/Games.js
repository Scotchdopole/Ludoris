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
exports.Games = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const uuid_1 = require("uuid");
let Games = class Games extends sequelize_typescript_1.Model {
};
exports.Games = Games;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Default)(uuid_1.v4),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID
    }),
    __metadata("design:type", String)
], Games.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
        unique: true
    }),
    __metadata("design:type", String)
], Games.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Games.prototype, "desc", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.JSON,
        allowNull: true
    }),
    __metadata("design:type", Array)
], Games.prototype, "platforms", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(64),
        allowNull: true
    }),
    __metadata("design:type", String)
], Games.prototype, "developer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(64),
        allowNull: true
    }),
    __metadata("design:type", String)
], Games.prototype, "publisher", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.JSON,
        allowNull: true
    }),
    __metadata("design:type", Array)
], Games.prototype, "genres", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.JSON,
        allowNull: true
    }),
    __metadata("design:type", Array)
], Games.prototype, "gameModes", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(64),
        allowNull: true
    }),
    __metadata("design:type", String)
], Games.prototype, "engine", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true
    }),
    __metadata("design:type", String)
], Games.prototype, "coverImgPath", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: true
    }),
    __metadata("design:type", String)
], Games.prototype, "ytbTrailerLink", void 0);
exports.Games = Games = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: "games",
        timestamps: false,
    })
], Games);
