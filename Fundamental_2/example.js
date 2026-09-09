//function 
'use strict'

function final_value(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * (20/100) : bill * (15/100)
    const total = tip + bill
    return total
}

console.log(final_value(275))


