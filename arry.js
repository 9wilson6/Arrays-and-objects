const hobbies = ['Sports', 'coocking'];
// for (let hobby of hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => "Hobby :" + hobby
// ));

const newArray = [...hobbies]; //spread operator
console.log(newArray);

const addToArray = (...args) => args; //rest operator
console.log(addToArray("wilson", "john", "mrefu", ".."));
//distructuring arrays
const [name1, name2, name3] = addToArray("wilson", "john", "mrefu", "..");
console.log(name1, name2, name3);