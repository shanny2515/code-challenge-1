// we first declare the object bodaBoda with its keys and values that are constant when calculating the total fare
const bodaBoda = {
    Base: 50,
    Per:15,
 }
console.log("Unafika wapi mkubwa? Kilometer nagpi?");  //we console this message in order to prompt the user for input

process.stdin.setEncoding('utf8');  //this is how node.js reads user input form the terminal and the .setENco... ensures that the input is a string 
process.stdin.on('data', (inpt) => {  //here this is like a listener so by typing and pressing enter it triggers data as an event and () is the string that the user has types 
   let kilometer = parseInt(inpt.trim());  //.trim function removes extra spaces or newlines from the (input) and parseInt converts a string to a number 
   let totalFare = (bodaBoda.Base + (bodaBoda.Per * kilometer))
   //   Then the input validation
   if (isNaN(kilometer) || kilometer <= 0){
      console.log ("Tafadhali andika nambari halali ya kilometer.");
      return;
   }
   // finally the final outcome fare that they should pay which has also been braked down 
   else {
      console.log(`Uko kwote? Io ni ${kilometer}km:
         Ukikalia pikipiki: KES ${bodaBoda.Base}
         Mpaka Uko: KES ${bodaBoda['Per'] * kilometer}
          Total: KES ${totalFare}`);
   }
   process.exit();  //this one terminates the program once its done 
})
 
    
  