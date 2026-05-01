// ? : ternary opreator: decision making

// ?? : nulish operator
//?. optional chaining

const userAge = 21;

const biyerJonnoEligible = ( age: number) => {
    // if (age >= 21)
    // {
    //     return "Biyer jonno eligible";
    // }
    // else {
    //     return "Biyer jonno eligible na";
    // }
const result = age >= 21 ? "Biyer jonno eligible" : "Biyer jonno eligible na";
return result;


}

biyerJonnoEligible(21);


// nulish coalescing operator

const userTheame = undefined;
const defaultTheame = "light";

const currentTheame = userTheame ?? defaultTheame;
console.log(currentTheame);

// 
const isAuthenticated = null;

const resultWithTerenary = isAuthenticated ? isAuthenticated: "You are a guest!"; 

const resultWithNulish = isAuthenticated ?? "You are a guest!";

console.log ({resultWithTerenary, resultWithNulish});


//optional chaining


const user: {
    address: {
        city: string,
        town: string
    }
} = {
    address: {
        city: "Dhaka",
        town: "Dhanmondi"
    }
}


const postalCode = user?.address?.postalCode;

console.log(postalCode);    