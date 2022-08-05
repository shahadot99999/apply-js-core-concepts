// // 1 * 2 * 3 *4 *5 *6 * 7

// // 3! = 3*2*1
// // 4! = 4*3*2*1

// function factorial(number) {
//     let result = 1;
//     for (let i = 1; i <= number; i++) {
//         result = result * i;
//     }
//     return result;
// }

// const result = factorial(9);
// console.log(result);

// Reverse Factorial 
function reverseFactorial(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        if (result === number)

            return i;

        result = result * i;


    }
    // return None;
}

const result = reverseFactorial(120);
console.log(result);


// function reverseFactorial(num) {
//     let product = 1,
//         n = 1;

//     while (product <= num) {
//         if (product === num) return `${n}!`;
//         product *= ++n;
//     }
//     return 'None';
// }

// console.log(reverseFactorial(24));  //   4!
// console.log(reverseFactorial(120)); //   5!
// console.log(reverseFactorial(150)); // None
