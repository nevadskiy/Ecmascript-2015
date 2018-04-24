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
###### before:
```
(function() {
    var user = 'admin';
})();
```
###### now: 
```
{
    let user = 'admin';
};
```