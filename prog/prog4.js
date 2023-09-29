// 1. Place the order for 2s
// 2. Start the production immedietly
// 3. Chop the fruit for 2s
// 4. Add Rice and Water for 1s
// 5. Start the machine - 1s
// 6. Select the container - 2s
// 7. Select the toppings - 3s
// 8. Serve Ice Cream - 2s

// Here we will do the nested calling od callback() functions
// the structure of the code below is called "callback() hell"
// the solution for the below hellcode is promises which whose code structure looks very clean 
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    }, 2000)//this will be displayed after 3 seconds
}
let production = () => {

    setTimeout(() => {//1st
        console.log("Production has started ");

        setTimeout(() => {//2nd
            console.log("the fruit has been chopped");//excutes after 2s of the text "Fruit name is" execution

            setTimeout(() => {//3rd
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {//4th
                    console.log("the machine was Started");

                    setTimeout(() => {//5th
                        console.log(`Containers are ${stocks.holder[0]} ${stocks.holder[1]} and ${stocks.holder[2]} for placing an iceream`);

                        setTimeout(() => {//6th
                            console.log(`Topping like ${stocks.toppings[0]} and ${stocks.toppings[1]} are selected and added upon ic cream`);

                            setTimeout(() => {
                                console.log(`Serve the Ice-cream`);
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)

            }, 1000)
        }, 2000)
    }, 0)//0 second
}

order(1, production)
// if we place call_production() callback function inside the setTimout() then it will only executed after finishing the 3s
// fruit name which is grape will be printed after 3s and immedietly after 0 s "Fruit name is" will be printed bcz we have placed call_production(); inside the setTimout() function
