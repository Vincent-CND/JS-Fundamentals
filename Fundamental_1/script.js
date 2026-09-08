// // let user = "Vinh"

// // if(user === "Vinh") {
// //     alert("So Handsome !!!")
// //     console.log(typeof user)
// // }
// // let, const and var
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// var job = 'programmer';
// job = 'teacher'

// lastName = 'Schmedtmann';

// // let n = '1' + 1; // '11'
// // // n = n - 1;
// // console.log(typeof n,n);

// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10');
// console.log('23' / '2');

// const money = 0

// if (money) {
//     console.log("Dont spend too much")
// } else {
//     console.log("Should get a job")
// }

const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}