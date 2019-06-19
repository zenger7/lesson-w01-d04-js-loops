//Exercises: JavaScript loops


//Print every number from 0 to 10

for (let i = 0; i <= 10; i++) {
  console.log(i);

}

console.log('-------');


//Print every number from 10 to 0

for (let i = 10; i >= 0; i--) {
  console.log(i);

}
console.log('-------');

//Print every number from 4 to -16
for (let i = 4; i >= -17; i--) {
  if (i%2 === 0) {
    console.log(i);
  }

}

console.log('-------');

//Print every fifth number from 8 to 41
var l = 5;
for (let i = 8; i <= 41; i++) {
  if (l != 5) {
    l = l + 1;
  }
  if (l === 5) {
    console.log(i);
    l = 0;
  }

}
console.log('-------');

//The classic Fizzbuzz Program


for (let i = 1; i <= 100; i++) {
  if (i%3 === 0) {
    console.log(i+ " Fizz");
  }
  if (i%5 === 0) {
    console.log(i+ " Buzz");
  }

  if ((i%5 === 0) && (i%5 === 0)) {
    console.log(i+ " Fizzbuzz");
  }
}

console.log('-------');

//The even/odd reporter
for (let i = 0; i <= 20; i++) {
  if ((i%2 === 0) && (i != 0)) {
    console.log(i+ " is odd");
  } else if ((i%3 === 0) && (i != 0)) {
    console.log(i+ " is even");
  }

}

console.log('-------');

//Multiplication Tables
for (let m = 1; m <= 10; m++) {

  for (let i = 0; i <= 10; i++) {
    console.log(i* m);

  }}
console.log('-------');

//The Grade Assigner
for (let i = 60; i <= 100; i++) {
  if ((i >= 90) && (i <= 100)) {
    console.log('A '+ i);
  }
  if ((i >= 80) && (i <= 90)) {
    console.log('B '+ i);
  }
  if ((i >= 70) && (i <= 80)) {
    console.log('C '+ i);
  }
  if ((i >= 60) && (i <= 70)) {
    console.log('D '+ i);
  }

}

//The Rest
