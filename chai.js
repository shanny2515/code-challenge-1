const chai = {
    Water: 200, 
    Milk: 50, 
    'Tea leaves': 1,
    Sugar : 2,
}
console.log("Enter the number of cups of chai you want to make:");
 process.stdin.setEncoding('utf8');
 process.stdin.on('data', (inpt) => {
    let cups = parseInt(inpt.trim());
    if (isNaN(cups) || cups <= 0) {
        console.log("please enter a valid number of cups.");
        return;
    }
    else {
        console.log(`To make ${cups} of kenyan chai, you need:
            water: ${chai.Water * cups } ml
            milk: ${chai.Milk * cups} ml
            tea leaves: ${chai['Tea leaves'] * cups} tablespoons
            sugar: ${chai.Sugar * cups} teaspoons 
            Enjoy your chai Bora!`)
    }
    process.exit();
 });

