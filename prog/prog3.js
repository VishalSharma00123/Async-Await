

let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]}`);
    }, 3000)//this will be displayed after 3 seconds
    call_production();
}
let production = () => {
    setTimeout(() => {
        console.log("Fruit name is");
    }, 0)//0 second
}

order(1, production)
// order(production)
// even though js runs from top to bottom call_production will be display first bcz 0 seconds interval to execute whereas another function takes 3s to execute
