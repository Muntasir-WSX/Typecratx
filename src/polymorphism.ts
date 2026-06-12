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



 const getSleepHours = (person: person) => {
    console.log(person.getSleep());
 }

    getSleepHours(new person());
    getSleepHours(new student());
    getSleepHours(new employee());

    console.log(getSleepHours(new person()));
    console.log(getSleepHours(new student()));
    console.log(getSleepHours(new employee()));


    // polymorphism with interfaces

    interface shape {
        getArea(): number;
    }

    const circle: shape = {
        radius: 5,
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }

    const rectangle: shape = {
        width: 10,
        height: 5,
        getArea() {
            return this.width * this.height;
        }
    }

// 
    console.log(circle.getArea());
    console.log(rectangle.getArea());
        console.log(getArea(circle));
        console.log(getArea(rectangle));


        // polymorphism with abstract classes
        abstract class animal {
            abstract makeSound(): void;
        }


        //beekepre class
        class beekeeper extends animal {
            makeSound() {
                console.log("Buzz");
            }
        }
        // dog class
        class dog extends animal {
            makeSound() {
                console.log("Woof");
            }
        }


        create table 
employees (
  employee_id Serial Primary key,
  employee_name varchar (50),
  department_id Int references departments (department_id),
  hire_date DATE
);

-- creating the departments table
create table 
departments (
  department_id Serial Primary key,
  department_name Varchar (50)
)










   