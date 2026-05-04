// object destructering
// array destructuring

// object destructuring

const user = {

    id: 101,
    name: {
        firstName: "Muntasir",
        lastName: "Mahmud"
    },

    gender: " Male",
    favoriteFood: "Biriyani",
    favoriteColor: "Blue"

}

// const myFavouriteColour = user.favouriteColor
// const 

const { favoriteColor :myFavouriteColor , name: { firstName, lastName } } = user;
console.log(myFavouriteColor, firstName, lastName);