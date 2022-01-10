"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("../aula5-classes/animal");
var cavalo_1 = require("../aula5-classes/cavalo");
var dao_1 = require("./dao");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('Dobleman');
var cavalo = new cavalo_1.Cavalo('Troia');
dao.insert(animal); //ou 'dao.insert(cavalo);' tambem funciona sem erro
//# sourceMappingURL=run.js.map