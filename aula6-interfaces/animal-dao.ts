import { Animal } from "../aula5-classes/animal";
import { DaoInterface } from "./dao-interface";

export class AnimalDao implements DaoInterface{
tableName: string = '';
insert(object: Animal): boolean {
    console.log('inserting...');
    object.mover(70);
    return true;
}

update(object: Animal): boolean {
    return true;
}

delete(id: number): Animal {
  return null;  
}

find(id: number): Animal {
    return null;  
  }

findAll(): [Animal] {
    return[new Animal('Rex')]
}
}