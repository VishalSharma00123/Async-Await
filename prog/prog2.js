// 1. Calling a function inside the another fucntion is called callback function
const one = (call_two) => {
    call_two()//callback() function step 2 will be displayed
    console.log("step 1");//step 1 will we displayed 
}
const two = () => {
    console.log("step 2");
}
one(two);//place the function two inside function one
// Now we can form a callback function by calling function two() inside function one() we can do this by using an argument

// Example 2
let order = (call_production) => {
    console.log("order placed,please call production");
    call_production();
}
let production = () => {
    console.log("order received,starting production");
}
order(production)

