// dynamically generalize

type GenericArray <value> = Array<value>;

// const friends : string [] = ["Mr.X", "Mr.Y", "Mr.Z"];
const friends : GenericArray<string> = ["Mr.X", "Mr.Y", "Mr.Z"];


// const rollNumbers: number [] = [1, 2, 3, 4, 5];
const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];


// const isEligible: boolean [] = [true, false, true];
const isEligible: GenericArray<boolean> = [true, false, true];

const sqrFucn = (value : number) => {
    return value * value;
}

sqrFucn(4);

type Coordinates <X,Y> = [X,Y];

const coordinates1: Coordinates<number,number> = [20,30];
const coordinates2: Coordinates<string,string> = ['20','30'];

