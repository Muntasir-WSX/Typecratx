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