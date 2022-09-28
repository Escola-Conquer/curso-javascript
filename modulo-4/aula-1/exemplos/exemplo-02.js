// // For Of

let arr = [];
arr[5] = "xyz";

console.log("for...of:");
let count = 0;

for (let item of arr) {
    console.log(count + ":", item);
    count++;
}

/*
output:

for...of:
0: undefined
1: undefined
2: undefined
3: undefined
4: undefined
5: xyz
*/

// For In

console.log("for...in:");
count = 0;

for (let item in arr) {
    console.log(count + ":", item);
    count++;
}
