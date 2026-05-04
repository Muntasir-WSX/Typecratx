//Generic Function

// const createArrayWithString = (value: string) => [value];


// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithObject = (value: {
//     id: number;
//     name: string;
// }) => [value];


const createArrayWithGeneric = <T>(value: T) => {
    return [value];
}


const arrString = createArrayWithGeneric("Hello, World!");
const arrNumber = createArrayWithGeneric(42);
const arrObject = createArrayWithGeneric<{ id: number; name: string }>({ id: 1, name: "Alice" });



//tuple

const createArrayWithTuple = (
    param1: {id: string, name: string}, param2: {id: string, name: string}) => [
    param1, param2
    ]

    const createArrayWithGenericTuple = <X,Y> (
        param1:X, param2: Y
    ) => [param1, param2];

    const res1= createArrayWithGenericTuple("Muntasir",false);
    const res2 = createArrayWithGenericTuple(222,{ name: "Muntasir", age: 22}); 




    