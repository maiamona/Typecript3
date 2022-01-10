"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("../aula5-classes/animal");
var animal_dao_1 = require("./animal-dao");
var dao = new animal_dao_1.AnimalDao(); //ou 'let dao: AnimalDao = new AnimalDao();' tambem vai funcionar
var animal = new animal_1.Animal('Scobidull');
dao.insert(animal);
//# sourceMappingURL=run.js.map