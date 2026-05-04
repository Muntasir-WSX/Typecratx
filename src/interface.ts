type User = {
    name: string;
    age: number;
};


interface IUser {
    name: string;
    age: number;
}

type Role ={
    role: "admin" | "user" | "guest";
}

type userWithRole = User & Role;

interface IuserWithRole extends IUser {
    role: "admin" | "user" | "guest";
}

const user1: userWithRole = {
    name: "Rahat",
    age: 25,
    role: "admin"
};

// interface Iuser: object type: array,object

const user2: IUser= {
    name: "Rajin",
    age: 30,
};




type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

//function type



type Add = (num1: number,num2: number) => number;

interface IAdd{
 ( num1: number,num2: number): number;
}

const add: Add = (num1, num2) => num1 + num2;

type friends = string [ ];
const friends: string [ ] = ["Alice", "Bob", "Charlie"];

interface Ifriends {
    [index: number]: string;
}

