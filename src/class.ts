//oop - class -obj

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor ( name: string,species: string, sound: string) {
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     }
// }

//parameter properties
class Animal {
    constructor ( public name: string, public species: string, public sound: string) {
    }
}
const dog = new Animal("dog", "mammal", "woof");
const cat = new Animal("cat", "mammal", "meow");

console.log(dog);
console.log(cat);


