// Problem Statement:
// Write a function that accepts a number and checks whether it is Even or Odd. 
// If the number is divisble by 2, it’s an Even number. Otherwise, it’s an Odd number. Test the function with inputs 18 and 5.

// Example
// Input: 18 → Output: Even Number

// Input: 5 → Output: Odd Number

// Approach
// Create a function that takes a number.
// If number % 2 === 0, return “Even”.
// Else return “Odd”.

function isEvenOdd(num){
    let rem = num % 2;
    if(rem == 0){
        console.log("This is an even number: " + num)
    }else{
        console.log("This is Odd number: " + num)
    }
}

isEvenOdd(2)
isEvenOdd(13)