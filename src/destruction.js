let [js, php, py, rb] = ['Javascript', 'PHP', 'Python', 'Ruby'];

console.log(js, php, py, rb);

let scores = [1, 2, 3];

let [low, , high, higher] = scores;
// 1, empty, 3, undefined 

let [low1, ...rest] = scores;
// 1, [2, 3]

let [low2, mid2, high2, higher2 = '4'] = scores;
// with default value


let [low3, mid3, [high3, higher3]] = [1, 2, [3, 4]];
// nested destruction

function getScores() {
    return scores;
}

// destruction for return two values
let [low4, mid4] = getScores();

let yes = 'yes';
let no = 'no';

//swapping values
[yes, no] = [no, yes];

//description
//babeling to array calling with buffers


// THE SAME PRACTICE WITH OBJECTS
 let person = {firstname: 'John', lastname: 'Doe'};

 let {firstname, lastname} = person;
 // new 2 vars with values from relevant props

 //renaming  and default value
 let {firstname: first, lastname: last, age = 25} = person;
 console.log(first, last);