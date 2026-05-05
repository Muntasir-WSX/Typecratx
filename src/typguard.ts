

// typeguard.ts

//in typeof

const add = (num1: number | string, num2: number | string) => {

if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
}
else {    return num1.toString() + num2.toString();
};
};

add(2,2);//4


add (2,'2'); //22

add("2", 2); //22


//inguard

type NormalUser = {
    name: string;
    
};

type AdminUser = {
    name: string;
    role: "admin";
};


const getUserInfo = (user: NormalUser | AdminUser) => {
    console.log(user);
    };

    getUserInfo({name: "John"}); //{name: "John"}
