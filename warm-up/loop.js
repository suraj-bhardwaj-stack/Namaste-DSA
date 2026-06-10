for(i=0; i< 5; i++){
    console.log(i);
}

// output 0 to 9

// First check the condition 
// Second , if condition is true , code will be exicuted 
// if code is exicuted , 
// print => 0
// increment the value 0 => 0 + 1
// check the condition again i < 5
// if condition is true , code will be exicuted
// if code is exicuted
// print => 1
// again increment the value 1 => 1 + 1
// check the condition again i < 5
// if condition is true , code will be exicuted
// if code is exicuted
// print 2
// again increment the value 2 => 2 + 1
// check the condition again i < 5
// if condition is true , code will be exicuted
// if code is exicuted
// print 3
// again increment the value 3 => 3 + 1
// check the condition again i < 5
// if condition is true , code will be exicuted
// if code is exicuted
// print 4
// again increment the value 4 => 4 + 1
// check the condition , now condition is false
// so code exicution end

// Revers Loop

for(i = 10; i>0; i--){
    console.log(" Revwers i " + i);
    
}

// write a function that search an element in
// array and return the index , if the element is not present 
// return -1

const arr = [2, 4, 5, 8, 9, 56, 90, 87, 34, 9]

function findIndex(index){
    for(i = 0; i < arr.length; i++){
        if(index == arr[i]){
            return i
        }
    }
    return -1
}

const collectIndex = findIndex(87)

console.log(collectIndex)