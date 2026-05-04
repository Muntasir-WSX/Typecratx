// constrain: strict rules for TypeScript

const addSTudentCourse = <T extends{id:number,name:string,age:number,grade:string}> (studentInfo: T)=> {
    return {
        course:"Next Level",
        ...studentInfo,
    };
};

const student1={
    name:"John",
    age: 20,
    grade: "A",

};

const student2={
    name:"Jane",
    age: 22,
    grade: "B",
};
const student3 = {
    hasWatch: true,
}
const result = addSTudentCourse(student2);
console.log(result);

