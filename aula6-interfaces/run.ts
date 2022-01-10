import { Animal } from '../aula5-classes/animal';
import { AnimalDao } from './animal-dao';
import { DaoInterface } from './dao-interface';

let dao: DaoInterface = new AnimalDao();//ou 'let dao: AnimalDao = new AnimalDao();' tambem vai funcionar
let animal: Animal = new Animal('Scobidull');

dao.insert(animal);