// Problem Statement:
// Write a program that accepts a number (age) and checks whether the person is eligible to vote.
//  A person is eligible if their age is 18 or more.

// Example:
// Input: 20

// Process: Check if 20 ≥ 18 → Eligible

// Output: You are eligible to vote.

// Approach:
// Take input from the user (or define a variable).
// Use a conditional statement to check if age is 18 or above.
// If yes, print “You are eligible to vote.”
// Otherwise, print “You are not eligible to vote.”


function isEligibleForVote(age){
    if(age < 18){
        console.log("You are not eligible for Voting " + age)
    }else{
        console.log("You are eligible foe voting " + age)
    }
}

isEligibleForVote(18)