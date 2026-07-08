// print this 
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

let n = 5; // number of rows

for(let i =0; i<n; i++) {
    let row = " ";
    for(let j = 0; j<n; j++) {
        row = row + "* "
    }

    console.log(row);
}

// Pattern 2
// *
// * *
// * * *
// * * * *

for(let i =0; i<n; i++) {
    let row = " ";
    for(let j = 0; j<=i; j++) {
        row = row + "* "
    }
    console.log(row);
}

// Pattern 3
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5 
*/

for(let i =0; i<n; i++){
    let row = " ";
    for(let j=0; j<=i; j++){
        row = row + (j+1) + " ";
    }
    console.log(row);
}

// pattern 4
/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

for(let i =0; i<n; i++){
    let row = " ";
    for(let j= 0; j<=i; j++){
        row = row + (i + 1)
    }
    console.log(row);
}
// pattern 5
/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
*/

for(let i=0; i<n; i++){
    let row = " ";
    for(let j =0; j<n-i; j++){
        row = row + (j + 1) + " ";
    }   
    console.log(row);
}

// pattern 6
/*
- - - - *
- - - * *
- - * * *
- * * * *
* * * * *
*/

for(let i=0; i<n; i++){
    let row = "";
    for(let j =0; j<n; j++){
        if(j<n-(i+1)){
            row = row + "- ";
        } else {
            row = row + "* ";
        }
    }
    console.log(row);
}

// anthor way to print pattern 6
for(let i=0; i<n; i++){
    let row = "";
    for(let j=0; j<n-(i+1); j++){
        row = row + "- ";
    }
    for(let k = 0; k<i+1; k++){
        row = row + "* ";
    }
    console.log(row);
}

//pattern 7
/*
|
| O
| O |
| O | O
| O | O | O
*/

for(let i=0; i<n; i++){
    let row = " ";
    let swith = 1;
    for(let j = 0; j<=i; j++){
        row = row +  " " + swith ;
        if(swith == 1){
            swith = 0;
        }else{
            swith = 1;
        }
    }
    console.log(row);
}

console.log("pattern 8");

// pattern 8
/*
1 
0 1
0 1 0
1 0 1 0
1 0 1 0 1
*/
 let toggle = 1;
for(let i =0; i<n; i++){
    let row = " ";
    for(let j=0; j<i;j++){
        
        row = row + toggle;
        if(toggle == 1){
            toggle = 0;
        }else{
            toggle = 1;
    }
   
}
 console.log(row);
}