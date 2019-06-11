const person = {
    "name": "wilson",
    "age": 28,
    greet() {
        console.log("My name is " + this.name + " aged " + this.age);
    } // My name is undefined agedundefined undefined when using => function
    // to fix this use the legendary function keyword ie function() or just use greet(){.....}


}
person.greet();

//object distructuring
const nameAndAge = ({ name, age }) => name + " " + age;
console.log(nameAndAge(person));

const { name, age } = person;
console.log(name, age);