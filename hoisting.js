// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.

console.log(test)
console.log(a)
var test="hello"

var a=function (){
    console.log("hi")
}