"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHeroe = exports.putHeroe = exports.postHeroe = exports.getHeroePorNombre = exports.getHeroe = exports.getHeroes = void 0;
const heroe_1 = __importDefault(require("../models/heroe"));
const getHeroes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const heroes = yield heroe_1.default.findAll();
    res.json({ heroes });
});
exports.getHeroes = getHeroes;
const getHeroe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const heroe = yield heroe_1.default.findByPk(id);
    if (heroe) {
        res.json(heroe);
    }
    else {
        res.status(404).json({
            msg: `No existe un héroe con el id ${id}`
        });
    }
});
exports.getHeroe = getHeroe;
const getHeroePorNombre = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre } = req.params;
    const heroe = yield heroe_1.default.findAll({
        where: {
            nombre: nombre
        }
    });
    if (heroe.length !== 0) {
        res.json(heroe);
    }
    else {
        res.status(404).json({
            msg: `No existe un héroe con el nombre ${nombre}`
        });
    }
});
exports.getHeroePorNombre = getHeroePorNombre;
const postHeroe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    console.log(body.nombre);
    try {
        const existenombre = yield heroe_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        console.log(existenombre);
        if (existenombre) {
            return res.status(400).json({
                msg: `Ya existe un héroe con el nombre ${body.nombre}`
            });
        }
        const heroe = yield heroe_1.default.create(body);
        console.log(heroe);
        res.json(heroe);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postHeroe = postHeroe;
const putHeroe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    if (Object.entries(body).length === 0) {
        console.log('vacío');
    }
    console.log(body);
    try {
        const heroe = yield heroe_1.default.findByPk(id);
        if (!heroe) {
            return res.status(404).json({
                msg: `No existe un héroe con el id ${id}`
            });
        }
        if (Object.entries(body).length !== 0) {
            yield heroe.update(body);
            res.json(heroe);
        }
        else {
            return res.status(404).json({
                msg: 'Debe indicar los datos a modificar'
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putHeroe = putHeroe;
const deleteHeroe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const heroe = yield heroe_1.default.findByPk(id);
    if (!heroe) {
        return res.status(404).json({
            msg: `No existe un héroe con el id ${id}`
        });
    }
    yield heroe.destroy();
    res.json(heroe);
});
exports.deleteHeroe = deleteHeroe;
