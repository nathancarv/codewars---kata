//----Multiply----

//Instructions: The code does not execute properly. Try to figure out why

// function multiply(a, b){
//  return a * b;
// }

//Answer:
function multiply(a, b) {
  return a * b;
}
var x = multiply(5, 6);

// ----Grasshopper - Order of operations----

// Instructions: You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32
// but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

// Answer:
function orderOperations() {
  return (2 + 2) * (2 + 2) * 2;
}

//   ----Even or Odd----

// Instructions: Create a function (or write a script in Shell) that takes an integer as an argument
// and returns "Even" for even numbers or "Odd" for odd numbers.

// Answer:
function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else if (number % 2 !== 0) {
    return "Odd";
  }
}

//  ----Return Negative----

// Instructions: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Answer:
function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else if (num < 0) {
    return num;
  } else {
    return 0;
  }
}

//----Lost without a Map----

//Instructions: Given an array of integers, return a new array with each value doubled.

//For example: [1, 2, 3] --> [2, 4, 6]

//Answer:
x = [1, 2, 3];
function maps(x) {
  function doubled(numbers) {
    return numbers * 2;
  }
  return x.map(doubled);
}

// ----MakeUpperCase----

//Instructions: Write function makeUpperCase.

//Answer:
str = "a,b,c";
function makeUpperCase(str) {
  return str.toUpperCase();
}

//----Reversed Words----

//Instructions: Complete the solution so that it reverses all of the words within the string passed in.

//reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

//Answer:
let str = "my name nate";
function reverseWords(str) {
  var reverseArr = str
    .split(" ")
    .reverse()
    .join(" ");
  return reverseArr; // reverse those words
}

//---- Sum Arrays----

//Instructions: Write a method sum that takes an array of numbers
// and returns the sum of the numbers.
// The numbers can also be negative. If the array does not contain any numbers then you should return 0.

// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2

//Answer:
function sum(numbers) {
  let counter = 0;
  for (i = 0; i < numbers.length; i++) {
    counter += numbers[i];
  }

  return counter;
}


//Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

//Instructions: Remove n exclamation marks in the sentence from left to right. n is positive integer.

//Answer:
function remove(s,n){
  for (let i = 1; i <= n; i++){
  console.log(i)
  s = s.replace('!', '');
  console.log(s)
  }
  return s;
  
}


