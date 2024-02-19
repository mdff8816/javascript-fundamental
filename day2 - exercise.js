// 1. Celcius to Fahrenheit

//Known Celcius
const celcius = 60;
//Converting to Fahrenheit formula = (Celcius * 9/5) + 32
const fahrenheit = (celcius * 9/5) + 32;
console.log(celcius + " C to F = ", fahrenheit + " F");

//VARIABLE TULIS KECIL DEPANNYA

// 2. Odd or even
const bilangan = 3;

// if (bilangan % 2 === 0){
//     console.log("even number");
// } else{
//     console.log("odd number");
// }
console.log(bilangan % 2 === 0 ? "genap" : "ganjil");

// 3. Prime number
let num = 7;
let isPrime = true;

// if (num <=1) {
//     console.log(num + " not a prime");
// } else if (num === 2){
//     console.log(num + " is a prime");
// } else {
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// if (isPrime) {
//     console.log(num + " is a prime number");
// } else {
//     console.log(num + " not a prime number");
// }
for (let i = 2; i< num; i++){
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime);

// 4. sum

let N = 5;
let sum = 0;
let message = "";

for (let i = 1; i <= N; i++) {
    sum += i;

    message += i + (i !== N ? " + " : " ");
}

console.log("Sum of numbers from 1 to", N, "is", sum);
console.log(message + " = " + sum);

// 5. Factorial

const numberOfFactorial = 5;
let result = 1;

for(let i = 1; i <= numberOfFactorial; i++){
    result = result * i;
    
} 
console.log( numberOfFactorial + '! = ' + result);

// 6. Fibonacci (bingung)

const Fn = 15
let a = 0;
let b = 1;
let c ;

for (let i = 2; i <= Fn ; i++) {
    c = a + b
    a = b
    b = c
    console.log(c);
}
    console.log(c);