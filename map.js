const numbers = [4, 5, 7, 8, 3,];
// Arrow Function like as function this is short version of function.
const doubleit = number => number * 2;

// map method working same as "of loop" method. map is short funtioning way.
const output = numbers.map(doubleit);
// console.log(output);
// // eivabe direct vabeu kora jai
// const squares = numbers.map(x => x * x);


const products = [{name:'trimmer', price: 2000, color: 'NevyBlue'}];

const productPrice = products.map(product => product.price);
console.log(productPrice);
