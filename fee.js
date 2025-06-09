console.log("Unatuma ngapi? KES")

process.stdin.setEncoding('utf8')
process.stdin.on('data', (inpt) =>{
    let amountToSend = Number(inpt.trim())
    if  (Math.ceil(amountToSend)){
    let transactionFee = (amountToSend * 0.15)
    if (Math.ceil(transactionFee)){
    if (transactionFee < 10){
        transactionFee = 10
    }else if (transactionFee > 70){
        transactionFee = 70
    }else {
        transactionFee = transactionFee
    }
    let totalAmount =  amountToSend +  transactionFee
    console.log (`sending KES ${amountToSend} 
        Calculated Transaction Fee: KES ${transactionFee}
        Total amount to be debited: KES ${totalAmount}
        
        Send Money Securely!`)
    }}
    process.exit();
})