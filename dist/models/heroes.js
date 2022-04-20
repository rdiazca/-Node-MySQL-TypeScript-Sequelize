"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../mysql/connection"));
const heroes = connection_1.default.define('heroes', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    poder: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = heroes;
