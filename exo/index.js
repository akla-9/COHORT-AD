
// function square(number) {
//     return number*number;
// }
// let number = square(2);
// console.log(number);

// let firstName = 'akla';

// let points = 90;
// let type= points >100? 'gold': 'silver';
// console.log(type);

console.log('hello world');

let a ='red';
let b ='blue';
let c = a;
a = b;
b=c;

console.log(a);
console.log(b);

let hour = 10;

if(hour>=6 && hour<12) {
    console.log('Good Morning');
}
else if(hour>=12 && hour <18) {
    console.log('Good afternoom')
}
else console.log('Good evening');

//for loop

// for (i=0;i<=5;i++) {
//     if(i%2 !==0) console.log(i);
// // }

// let i=0;
// while(i<=5){
//     if(i%2 !==0) console.log(i);
//     i++;
// }

// for in loop

// const person = {
//     name:'akla',
//     age:30
// };

// for (let key in person)
//     console.log(key, person[key]);

// //for off loop

// const colors =['red', 'blue','green'];

// for (let color of colors)
//     console.log(color);

//write a function that takes two numbers and returns the max of the two

// function max (a,b) {
//     return  a>b? a:b;
// }

// let number = max (4,9);
// console.log(number);


//laandscape or portrait

// function isLandscape(width, height) {
//   return (width>height);
// }
// ;
// console.log(isLandscape(900,400));


//fizzbuzz function 

// function fizzBuzz(input) {
//     if (typeof input !=='number') {
//         return NaN;
//     }
//      if((input %3===0) && (input%5===0)){
//         return 'fizzBuzz';
//     }
//     if (input%3===0){
//         return 'Fizz';
//     }
//      if (input%5===0) {
//         return 'buzz';
//     }
//     return input;
    
// }
// console.log(fizzBuzz(false));

//arrays
//finding an element 


// const numbers = [1, 2, 3, 4];
// console.log(numbers.indexOf('a'));
// console.log(numbers.includes(3));


//EXO 4 dEMERIT POINTS

//for every 5km above the speed limit - 1 point


// checkSpeed(130);

// function checkSpeed(speed){

//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if(speed < speedLimit + kmPerPoint) {
//         console.log('OK');
//         return;
//     }
    
//     const points = Math.floor((speed - speedLimit)/kmPerPoint);
//     if (points >= 12)
//         console.log('License suspended');
//     else 
//         console.log('Points', points);
    

// }

//EXO5 EVEN AND ODD

// showNumbers(10);

// const limit = [0,1,2,3,4,5,6,7,8,9,10];

// function showNumbers (limit) {

// if (limit % 2 ===0)
//     console.log(limit,'EVEN');
// else
//     console.log(limit,'ODD');
// }



// for (i=0; i<5; i++) {
// console.log('the number is'+ i); 
// }

// function showNumbers (limit) {

// for(i=0; i<limit; i++){
//     if(i%2===0)
//         console.log(i, 'EVEN');
//     else
//         console.log(i, 'ODD');

// }
//     const message = (i%2===0)? 'EVEN' : 'ODD';
//     console.log(i, message);

//     }


    //EXO6  COUNT TRUTHY 



const array = ['jameas','john','fruit'];
function countTruthy (array) {

let countLength = array.length;
   console.log(countLength);

    }

    countTruthy();
