console.log("Unatuma ngapi? KES")  //we console this message in order to prompt the user for input

process.stdin.setEncoding('utf8') //this is how node.js reads user input form the terminal and the .setENco... ensures that the input is a string 
process.stdin.on('data', (inpt) =>{  //here this is like a listener so by typing and pressing enter it triggers data as an event and () is the string that the user has types 
    let amountToSend = Number(inpt.trim()) //.trim function removes extra spaces or newlines from the (input) and Number converts a string to a number 
    let transactionFee = (amountToSend * 0.015)   //calculating the transaction fee
    // conditional statement on how one is charged the transaction fee  depending on the amount they want to send
    if (transactionFee < 10){
        transactionFee = 10
    }else if (transactionFee > 70){
        transactionFee = 70
    }
    // finally the final amount to be debited and its also broken down 
    let totalAmount =  amountToSend +  transactionFee
    console.log (`    Sending KES ${amountToSend} 
    Calculated Transaction Fee: KES ${transactionFee}
    Total amount to be debited: KES ${totalAmount}
        
    Send Money Securely!`)
    
    process.exit();  //this one terminates the program once its done 
})