// Async and Await is a better way of writing promises 
// here we will be writing the same previous example but using async and await
// it consist of try ,catch and finally

// 1. Place the order for 2s
// 2. Start the production immedietly
// 3. Chop the fruit for 2s
// 4. Add Rice and Water for 1s
// 5. Start the machine - 1s
// 6. Select the container - 2s
// 7. Select the toppings - 3s
// 8. Serve Ice Cream - 2s
// displaying the same thing which but using async and await
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;

const time = (ms) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms)
        }
        else {
            reject(console.log('shope is closed'))
        }
    })
}

async function kitchen() //we declared this funcitona as async which means everything in this function can asynchronously
{
    try {
        await time(2000)//await stops the normal execution for some time so that other functions or code can execute before it, now here time function will we called after 6s so what strawberry was selected will be displayed after 6s
        console.log(`${stocks.Fruits[0]} was selected`);

        console.log('Start the production');

        await time(2000)

        console.log('Chop the fruits');

        await time(2000)

        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000)

        console.log('start the machine');

        await time(2000)

        console.log(`${stocks.holder[1]} container was selected`);

        await time(3000)

        console.log(`${stocks.toppings[1]} was added`);

        await time(2000)

        console.log(`Serving the Icecream`);
    }
    catch (error) {
        console.log('customer left', error);
    }
    finally {
        console.log('day ended,shop closed');
    }
}
kitchen()
console.log("jdhfhkfdhj");
// let topping_choice = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log("which tippings would you love? "))
//         }, 3000)
//     })
// }

// async function Kitchen() //this are the steps that we are trying to execute or working on
// {
//     console.log(" A ");
//     console.log(" B ");
//     console.log(" C ");
//     await topping_choice()
//     console.log(" D ");
//     console.log(" E ");
// }
// Kitchen()
// console.log('doing the dishes');
// console.log('cleaning the tables');
// console.log('taking others orders');


// async function order() {
//     try {
//         await abc//it pointing out to the function which doesn't exist abc and it is a fake function so it is a error and we will throw this error to the catch function
//     }
//     catch (error) //it will catch the error thrown by try
//     {
//         console.log("abc doesn't exist");
//     }

//     finally {
//         console.log("anyway it will executed");
//     }
// }

// order()//call the order functions to display the output
// // we can use then() outside aync function as well
// order().then(() => {
//     console.log("Hi Everyone");
// })//syntax