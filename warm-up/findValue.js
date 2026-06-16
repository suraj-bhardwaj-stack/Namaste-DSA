// Write a function that return the number of nagative in array.

let arr = [8, 7, 0,  7, 0, -3, 7, -8, 2, 7,  20 , 1  , -2, ]

function findNagativeNumbers(arr){
    let count = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i] < 0){
            count++
        }
    }

    return count;
}

const  collectNum = findNagativeNumbers(arr)
console.log("Nagative Num count: " + collectNum)

// Find largest num in a array 

function findLargestNum(arr){
    let largestNum = -Infinity;
    for(i=0; i<arr.length; i++){
        if(arr[i] > largestNum){
            largestNum = arr[i]
        }
    }

    return largestNum
}

const collectLargestNum = findLargestNum(arr)

console.log("Largest Num: " + collectLargestNum)

// find smallest Num

function findSmallestNum(arr){
    let smallestNum =  Infinity;

    for(i=0; i<arr.length; i++){
        if(arr[i]< smallestNum){
            smallestNum = arr[i]
        }

      
    }
  return smallestNum
}

const collesctSmallNum = findSmallestNum(arr)
console.log("smallestNum: " +collesctSmallNum);
