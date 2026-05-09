// polymorphism

class person {
    getSleep() {
        return "I am a normal person and need 8 hours of sleep";
    }
}

class student extends person {
    getSleep() {
        return "I am a student and need 10 hours of sleep";
    }   
}

class employee extends person {
    getSleep() {
        return "I am an employee and need 6 hours of sleep";
    }       
}

let person1 = new person();
let student1 = new student();
let employee1 = new employee();

console.log(person1.getSleep());
console.log(student1.getSleep());
console.log(employee1.getSleep());


 const person2: person = new student();
 console.log(person2.getSleep());

 for (let i = 0; i < 3; i++) {
    let person3: person;
    if (i === 0) {
        person3 = new person();
    }
    else if (i === 1) {
        person3 = new student();
    }
    else {
        person3 = new employee();
    }
    console.log(person3.getSleep());
 }
 

 const people: person[] = [new person(), new student(), new employee()];
 for (const person of people) {
    console.log(person.getSleep());
 }

 let person4: person = new student();
 console.log(person4.getSleep());