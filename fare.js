const bodaBoda = {
    Base: 50,
    Per:15,
 }
console.log("Unafika wapi mkubwa? Kilometer nagpi?");

process.stdin.setEncoding('utf8');
process.stdin.on('data', (inpt) => {
   let kilometer = parseInt(inpt.trim());
   let totalFare = (bodaBoda.Base + (bodaBoda.Per * kilometer))
   if (isNaN(kilometer) || kilometer <= 0){
      console.log ("Tafadhali andika nambari halali ya kilometer.");
      return;
   }
   else {
      console.log(`Uko kwote? Io ni ${kilometer}km:
         Ukikalia pikipiki: KES ${bodaBoda.Base}
         Mpaka Uko: KES ${bodaBoda['Per'] * kilometer}
          Total: KES ${totalFare}`);
   }
   process.exit();
})
 
    
  