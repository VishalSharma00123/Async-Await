// Synchronus JS
// Here is the example of synchronus js where we are diplaying the logs content one by one where the contents are get displayed one by one it means the js rund from top to the Bottom serially if any one log get stuck or diplays error then any logs comes after that will also not run 
console.log("I");
console.log("eat");
console.log("spoon");
console.log("Ice cream");
console.log("with a");
console.log("**************************************");
// Asynchronus JS

// setTimout() in js => it is Asynchronus mwthod in js

// The setTimeout() function calls a function after a number of milliseconds.

// 1 second = 1000 milliseconds.
// By consindering above example

console.log("I");
console.log("eat");
console.log("spoon");
setTimeout(() => {
    console.log("Ice cream");
}, 3000)//this fucntion will get displayed after 3 second which means we can change the order of execution using setTimout() function we can set that after how many times a fucntion should get displayed
console.log("with a");

// Syntac for setTimout()
// myTimeout = setTimeout(function, milliseconds);
