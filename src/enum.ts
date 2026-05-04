//enum

//set or fixed string leteral ek jaigai rakhe.

enum UserRoles {
    Admin = "Admin",
    User = "User",
    Guest = "Guest",
}

// type UserRoles = 'Admin' | 'User' | 'Guest';

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.User) {
        return true;
    }
    else return false;

};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);

