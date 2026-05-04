// union

type userRole = "Admin" | "User";

const getDashBoard = ( role: userRole) => {
    if (role === "Admin") {
        return "Admin Dashboard";
    } else if (role === "User") {
        return "User Dashboard";
    } else if (role === "Guest") {
        return "Guest Dashboard";
    }
}

// getDashBoard("Guest") // Argument of type '"Guest"' is not assignable to parameter of type 'userRole'.ts(2345)

// intersection

type Employee = {
    id: string,
    name: string,
    PhoneNo: string
}

type Manager = {
    Designation: string,
    teamSize: number
}

type EmployeeManager = Employee & Manager;

const ChyShaheb : EmployeeManager = {
    id: "E001",
    name: "Chy Shaheb",
    PhoneNo: "01960551476",
    Designation: "Manager",
    teamSize: 10
}