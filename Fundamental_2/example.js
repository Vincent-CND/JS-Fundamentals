//function 
'use strict'

function final_value(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * (20/100) : bill * (15/100)
    const total = tip + bill
    return total
}

// console.log(final_value(275))


//function declaration

// const age1 = calcAge1(2002) => this line is the difference between declaration and expression , declare could be called before defined

function calcAge1(birthYear) {
    return 2026 - birthYear
}
const age1 = calcAge1(2002)


//function expression , function without name is called anonymous function => need to store inside variable
const calcAge2 = function (birtYeah) {
    return 2027-birtYeah
}

const age2 = calcAge2(2000)

console.log(age1,age2)

//Arrow Function 