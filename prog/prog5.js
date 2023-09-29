// solving the hell code structure using .then()
// JavaScript Promise Object
// A JavaScript Promise object can be:

// Pending
// Fulfilled
// Rejected
// The Promise object supports two properties: state and result.

// While a Promise object is "pending" (working), the result is undefined.

// When a Promise object is "fulfilled", the result is a value.

// When a Promise object is "rejected", the result is an error object.
// Promise.then() takes two arguments, a callback for success and another for failure.

// Both are optional, so you can add a callback for success or failure only.
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time)
        }
        else {
            reject(console.log("Our shop is close"))
        }
    })
}

const store = order(2000, () => { console.log(`${stocks.Fruits[0]} was selected`) })//initial step 1st
    // console.log(store) no extra code  or writing is allowed between .then() chaining an initial step or promise
    // Note you should not use semilcolon(;) after the end of the initial step or after every .then() function
    //2nd .then()
    .then(() => {
        return order(0, () => { console.log("Production has started") })
    })

    // 3rd .then()
    .then(() => {
        return order(2000, () => { console.log("Chop the fruit") })
    })

    // 4th .then()
    .then(() => {
        return order(1000, () => { `${stocks.liquid[0]} and ${stocks.liquid[1]} was added` })
    })

    // 5th .then()
    .then(() => {
        return order(1000, () => console.log(`Machine was started`))
    })

    //6th .then()
    .then(() => {
        return order(2000, () => console.log(` ${stocks.holder[0]} container is selected `))
    })

    // 7th .then()
    .then(() => {
        return order(3000, () => console.log(`${stocks.toppings[0]} is selected `));
    })

    // 8th .then()

    .then(() => {
        return order(2000, () => console.log("Serve the Ice cream "))
    })

    // Error Handling part this part only be executed when is_shop_open id false
    // Catch()
    .catch(() => {
        console.log("Customer left");
    })

    // this above code works exactly as the setTimout() but it prevents the hell code structure and provides the cleaner code

    // finally()
    .finally(() => {
        console.log(`it will be executedn in any possible situation`);
    })