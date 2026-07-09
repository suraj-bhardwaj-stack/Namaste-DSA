// Write a function that return thr count of digit in a given number.

function countDigit(num){
    let count = 0;
    if (num == 0) return 1
    num = Math.abs(num)
    while(num>0){
        num = Math.floor(num/10)
        count++;
    }

    return count
}

const result = countDigit(-100456) // 5
console.log(result);
