//type alias

type User = 
    {
    id: number,
    name:{
        firstName: string,
        lastName: string
    },
    gender: "Male" | "Female",
    contactNo: string,
    address: {
        division: string,
        City: string
    }
 } 

const user1 : User = {
        id: 101,
        name: {
            firstName: "Muntasir",
            lastName: "Mahmud"
        },
        gender: "Male",
        contactNo: "01960551476",
        address: {
            division: "Dhaka",
            City: "Dhaka"
        }
    }



    const user2 : User = {
            id: 102,
            name: {
                firstName: "Shahariat",
                lastName: "Hossain"
            },
            gender: "Male",
            contactNo: "01712345678",
            address: {
                division: "Chittagong",
                City: "Chittagong"
            }
        }