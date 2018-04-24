## ES6 Crash Review

#### Let, Const, Var
> let and const are block scoped and have not hoisting effect
> var is function scoped
```
let visible = 'hello';
console.log(visible); // 'hello'

if (true) {
    let notVisible = 'hi!';
}
console.log(notVisible); // x

```
#### ES6 Immediately Invoked Function Expressions realization
**before:**
```
(function() {
    var user = 'admin';
})();
```
**now:**
```
{
    let user = 'admin';
};
```

#### Arrow Functions
> Short syntax function with binding 'this' context

**before:**
```
var arr = [1, 2, 3, 4, 5];
var squares = arr.map(function (x) { return x * x }); // Function Expression
```
**now:**
```
const arr = [1, 2, 3, 4, 5];
const squares = arr.map(x => x * x); // Arrow Function Expression
```