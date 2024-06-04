// console.log(process.argv)

let sum = 0;

//starts at 2 since the first two elements are links not the numbers we want to sum
for(let i = 2; i < process.argv.length; i++){
    sum += Number(process.argv[i]); // Number() converts string numbers to an actual number -- we don't want our output to be 123-- we want it to be 6
}

console.log(sum)