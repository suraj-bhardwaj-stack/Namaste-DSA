// Write a function to find second largest num in an array

let arr = [2, 4, 5, 23, 54, 2, 65, 23, 13, 54, 67, 86, 23, 98, 56, 64, 44];

function secondLargest(arr){
    let fl = -Infinity;
    let sl = -Infinity;
    for(i=0; i< arr.length; i++){
        if(arr[i]>fl){
            sl = fl;
            fl = arr[i]
        }else if(arr[i] > sl){
            sl = arr[i]
        }
    }

    return `first largest num ${fl} and second largest num ${sl}`
}

const findNum = secondLargest(arr)
console.log(findNum);
