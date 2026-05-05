//

class Person {
    name: string;

    constructor (name: string)
    {
        this.name = name;
    }

    getSleep(numOfHours: number)
    {
        console.log(`${this.name} sleeps for ${numOfHours} hours a day.`);
    }
}

class Student extends Person {
    constructor (name: string)
    {
        super(name);
    }
    doStudy(hrs: number){
        console.log(`${this.name} is studying almost ${hrs} hours a day.`);
    }
}


const getUserInfo = (user: Person) => {
    user.getSleep(8);
}
const student1 = new Student("John");
const teacher1 = new Person("Smith");

getUserInfo(student1);
getUserInfo(teacher1);