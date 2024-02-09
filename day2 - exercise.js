// 1. Celcius to Fahrenheit

//Known Celcius
const Celc = 60;
//Converting to Fahrenheit formula = (Celcius * 9/5) + 32
const Fahrenheit = (Celc * 9/5) + 32;
console.log(Fahrenheit);


// 2. Odd or even
const bilangan = 2

if (bilangan % 2 === 0){
    console.log("even number");
} else{
    console.log("odd number");
}


// 3. Prime number
let num = 2;
let isPrime = true;

if (num <=1) {
    console.log(num + " not a prime");
} else if (num === 2){
    console.log(num + " is a prime");
} else {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime) {
    console.log(num + " is a prime number");
} else {
    console.log(num + " not a prime number");
}

// 4. sum
