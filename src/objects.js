let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
  firstname, lastName, email,
  sayHello() {
    console.log(`Hi my name is ${this.firstname} ${this.lastName}`);
  }
}

console.log(person);

// Property as a variable
person.firstname;
person['firstName'];
// ES6:
let property = 'firstName';
person[property];
person = {
  [property]: 'Bill'
}