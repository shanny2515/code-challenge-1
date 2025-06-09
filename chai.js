// we first declare the object chai with its keys and values
const chai = {
    Water: 200, 
    Milk: 50, 
    'Tea leaves': 1,
    Sugar : 2,
}
console.log("Enter the number of cups of chai you want to make:");  //we console this message in order to prompt the user for input
 process.stdin.setEncoding('utf8');  //this is how node.js reads user input form the terminal and the .setENco... ensures that the input is a string 
 process.stdin.on('data', (inpt) => {  //here this is like a listener so by typing and pressing enter it triggers data as an event and () is the string that the user has types 
    let cups = parseInt(inpt.trim());  //.trim function removes extra spaces or newlines from the (input) and parseInt converts a string to a number 
     //next is the input validation  and  what to be consoled afterwards
    if (isNaN(cups) || cups <= 0) {
        console.log("please enter a valid number of cups.");
        return;
    }
    else {

        //lastly this is the complete recipe deppending on how many cups of tea you need 
        console.log(`To make ${cups} of kenyan chai, you need:
            water: ${chai.Water * cups } ml
            milk: ${chai.Milk * cups} ml
            tea leaves: ${chai['Tea leaves'] * cups} tablespoons
            sugar: ${chai.Sugar * cups} teaspoons 
            Enjoy your chai Bora!`)
    }
    process.exit(); //this one terminates the program once its done 
 });

