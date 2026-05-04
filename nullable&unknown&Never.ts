//nullable types

const getUser = ( input:string | null ) =>
{
    if (input){
        console.log( `From DB: ${input}` );
    } else {
        console.log( "No user found" );
    }
};

getUser(null);


//  unknown type


const discountCalculator = (input:unknown) => {

if (typeof input === "number"){
    console.log(`Discounted price: ${input * 0.9}`);

}
else if (typeof input === "string"){
   const splittedInput = input.split("");
   const price = parseFloat(splittedInput.join(""));
}
else {
    console.log("Unsupported input type");
}

discountCalculator(100)
discountCalculator("100")
discountCalculator(null)


}