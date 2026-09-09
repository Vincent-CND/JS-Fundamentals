// // // // let user = "Vinh"

// // // // if(user === "Vinh") {
// // // //     alert("So Handsome !!!")
// // // //     console.log(typeof user)
// // // // }
// // // // let, const and var
// // // let age = 30;
// // // age = 31;

// // // const birthYear = 1991;
// // // // birthYear = 1990;
// // // // const job;

// // // var job = 'programmer';
// // // job = 'teacher'

// // // lastName = 'Schmedtmann';

// // // // let n = '1' + 1; // '11'
// // // // // n = n - 1;
// // // // console.log(typeof n,n);

// // // console.log('I am ' + 23 + ' years old');
// // // console.log('23' - '10');
// // // console.log('23' / '2');

// // // const money = 0

// // // if (money) {
// // //     console.log("Dont spend too much")
// // // } else {
// // //     console.log("Should get a job")
// // // }

// // const day = 'friday';

// // switch (day) {
// //   case 'monday': // day === 'monday'
// //     console.log('Plan course structure');
// //     console.log('Go to coding meetup');
// //     break;
// //   case 'tuesday':
// //     console.log('Prepare theory videos');
// //     break;
// //   case 'wednesday':
// //   case 'thursday':
// //     console.log('Write code examples');
// //     break;
// //   case 'friday':
// //     console.log('Record videos');
// //     break;
// //   case 'saturday':
// //   case 'sunday':
// //     console.log('Enjoy the weekend :D');
// //     break;
// //   default:
// //     console.log('Not a valid day!');
// // }

// const isTired = true

// true && false === false ? console.log("EUWWWW") : console.log("YEHHH") 

// const age = 23
// const drink = age >= 18


const bill = 430
let tip;

if (bill>=50 && bill<=300) {
  tip = (15/100) * bill
  
  const final_value = bill + tip

  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${final_value}`)
} else{
  tip = (20/100) * bill
  const final_value = bill + tip
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${final_value}`)
}

