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

// console.log(age1,age2)

//Arrow Function is the another way to write function expression

const calcAge3 = (birthYear) => 2036 - birthYear

const age3 = calcAge3(2003)

// console.log(age3)

// callback function


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
// console.log(fruitProcessor(2, 3));


//challenges



const calcAverage = (scoreX,scoreY,scoreZ) => (scoreX + scoreY + scoreZ) / 3

const scoreDolphins = calcAverage(44,23,71)
const scoreKoalas = calcAverage(65,54,49)


const checkWinner = (averageDolphins,averageKoalas) => {
    if (averageDolphins > (averageKoalas*2)) {
        return `Dolphins win (${averageDolphins} vs ${averageKoalas})`

    } else if (averageKoalas > (averageDolphins*2)) {
        return `Koalas win (${averageKoalas} vs ${averageDolphins})`

    } else{
        console.log("No team wins")
    }
}

// console.log(checkWinner(scoreDolphins,scoreKoalas))

// array method

const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends.push('jay'))
const popped = friends.pop()
// console.log('this is popped',popped)

// ex2 

const calcTip = (bill) => {
    const Tip = bill >= 50 && bill <= 300 ? (15/100)*bill : (20/100)*bill
    return Tip
}

// const tip = calcTip(200)
const bill = new Array(125,555,44)

const tips = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])]

const total = [bill[0]+tips[0],bill[1]+tips[1],bill[2]+tips[2]]
console.log(total)