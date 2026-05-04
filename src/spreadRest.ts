const friends = [ "Shahariat", "Amran", "Jami", "Shuvo", "Nabil"];
const uniFriend = [ "Shahariat", "Amran", "Jami", "Shuvo", "Nabil"];
const schoolFriend = [ "Tousif", " Mahmud", "Emon", "Maruf", "Kamrul", "Shafayet"];


friends.push(...schoolFriend);
friends.push(...uniFriend);
console.log(friends);

const user = { name: "Muntasir", phoneNo: "01960551476", email: "muntasir@example.com" };

const otherInfo = { hobby:'outing', favourtiteFood: 'biriyani', favouriteColor: 'blue' };

const userInfo = {...user, ...otherInfo};
console.log(userInfo);


// rest operator

// const sendInvite = (friend1: string, friend2: string, friend3: string)=>{

//     console.log(`Sent Invitation to ${friend1}, ${friend2} and ${friend3}`);
// }

// sendInvite("Shahariat", "Amran", "Jami");


const sendInvite = (...friends: string[]) => {

    friends.forEach((friend : string) => console.log(`Sent Invitation to ${friend}`));
}