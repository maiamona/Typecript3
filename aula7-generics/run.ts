import { Animal } from "../aula5-classes/animal";
import { Cavalo } from "../aula5-classes/cavalo";
import { Dao } from "./dao";

let dao: Dao<Animal> = new Dao<Animal>();

let animal: Animal = new Animal('Dobleman');
let cavalo: Cavalo = new Cavalo('Troia')

dao.insert(animal);//ou 'dao.insert(cavalo);' tambem funciona sem erro