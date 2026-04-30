// Function
//arrow function,normal function,
function addNormal (num1: number,num2:number): number

 {
    return num1+num2;
 }

 //  add (1."1"); //error

 const addArrow = ( num1: number, num2: number ): number => num1 + num2;



// object => function => method

const poorUser = {
    name: "John",
    balance: 5,
    addBalance (value: number) : number {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
}

poorUser.addBalance(10); //15


// callback function

const arr: number[] = [1,2,3,4,5];

const sqrArray = arr.map((element: number ): number => element * element);
