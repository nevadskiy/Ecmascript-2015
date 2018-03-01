// Greating
function greet(name) {
  console.log(`Hello ${name}`.toUpperCase());
}
greet('Bill');

// Mailing with template (new lines and spaces
function createEmail(to, from, subject, message) {
  console.log(`
    To: ${to}
    From: ${from}
    Subject: ${subject}
    Message: ${message}
  `)
}
createEmail('john@email.com', 'jane@mail.com', 'Hello', 'How are you doing?')

// Statements
function add(x, y) {
  console.log(`${x} + ${y} = ${parseInt(x + y)}`);
}
add('5', '7');

// Uppering
let name = 'Bill';
console.log(upperName`Hello ${name}`);

function upperName(literals, ...values) {
  return literals[0] + values[0].toUpperCase();
}