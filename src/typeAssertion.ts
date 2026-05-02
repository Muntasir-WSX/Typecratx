let anytihng: any;

anytihng = "Hello, World!";

(anytihng as string).toLowerCase();

const kgToGramConverter = (input: string | number ) => {

    if (typeof input === "number"){
        return input * 1000;
    }
    else if (typeof input === "string"){
        const [value] = input.split(" ");
        return (`Coverted Output is : ${Number(input) * 1000} grams`);
    }


}

const reslut1 = kgToGramConverter(2);
const reslut2 = kgToGramConverter("2 kg");

console.log(reslut1);
console.log(reslut2);
