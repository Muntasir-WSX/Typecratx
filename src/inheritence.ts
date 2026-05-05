class Student {
    name: string;
    age: number;
    address: string;
    designation: string ; //extra property

    constructor ( name: string, age: number, address: string, designation: string) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }

    getSleep(numOfhours: number)
    {
        console.log(` ${this.name} sleeps ${numOfhours} hours a day`);
    }

    attendClass(numOfhours: number)
    {
        console.log(` ${this.name} attends class for ${numOfhours} hours a day`);
    }
}


const student1 = new Student(` Mr. Fakibaz`, 20, `Dhaka`, `Student`);
student1.getSleep(15);