console.log("Unatuma ngapi? KES")

process.stdin.setEncoding('utf8')
process.stdin.on('data', (inpt) =>{
    let amountToSend = Number(inpt.trim())
    let transactionFee = (amountToSend * 0.015)
    if  (Math.ceil(transactionFee)){
    if (transactionFee < 10){
        transactionFee = 10
    }else if (transactionFee > 70){
        transactionFee = 70
    }
    let totalAmount =  amountToSend +  transactionFee
    console.log (`    Sending KES ${amountToSend} 
    Calculated Transaction Fee: KES ${transactionFee}
    Total amount to be debited: KES ${totalAmount}
        
    Send Money Securely!`)
    }
    process.exit();
})