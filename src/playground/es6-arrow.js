function square(x){
    return x * x
};
console.log(square(3))

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;


console.log(squareArrow(2))

// Challenge - use arrow functions 
// getFirstName('Kendall Moffett') -> "Kendall"
// create regular arrow function
// create arrow function uysing shorthand syntax

// const firstName = (fullName) => {
//     return fullName.split(' ')[0];
// };

const firstName = (fullName) => fullName.split(' ')[0];

 console.log(firstName('Kendall Moffett'));
