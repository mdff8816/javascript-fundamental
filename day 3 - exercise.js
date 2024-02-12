// 1.

var input = 9;
var limit = 10;

for(let i = 1; i <= limit; i++) {
    console.log(`${input } x ${i} = ${input * i }`)
}

// 2.
const inputString = prompt= ("madam ");
const alphanumericStr = inputString.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

const isPalindrome = alphanumericStr === alphanumericStr.split('').reverse().join('');

if (isPalindrome) {
    console.log(`'${inputString}' is a palindrome.`);
} else {
    console.log(`'${inputString}' is not a palindrome.`);
}
// 3.
const amount = 1000
const formattedAmount = amount.toLocaleString ('id-ID', {
    style : 'currency',
    currency : 'IDR',
});
console.log(formattedAmount);

// 4.
const centimeters = 100000;
const kilometers = centimeters / 100000;

console.log(kilometers + " km");

// 5.

const string = "Hello world"
const searchString = "ell"

const result = string.replace(searchString, '');
console.log(result);

// 6.

let sentence = "hello world";

let words = sentence.split(" ");

for(let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase( ) + words[i].substring(1);
    
}

let capitalizedSentence = words.join(" ");
console.log(capitalizedSentence);

// 7.

let str = "hello";
let reversedString = "";

for (let i =str.length -1; i>= 0; i-- ){
    reversedString += str[i]
}

console.log(reversedString);

// 8.

var string2 = 'The QuiCk BrOwN Fox';

var swappedStr = string2.split('').map(function(char) {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
}).join('');

console.log(swappedStr);

// 9.

let number1 = 42;
let number2 = 27;

if (number1 > number2) {
    console.log(number1 + " is the largest number.");
} else {
    console.log(number2 + " is the largest number.");
}

// 10.

let num1 = 42;
let num2 = 27;
let num3 = 18;

if (num1 <= num2 && num1 <= num3) {
    if (num2 <= num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
} else if (num2 <= num1 && num2 <= num3) {
    if (num1 <= num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
} else {
    if (num1 <= num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
    }
}

// 11. 

var input = "hello";

if (typeof input === 'string') {
    console.log(1);
} else if (typeof input === 'number') {
    console.log(2);
} else {
    console.log(3);
}

// 12. 
const exampleString = 'An apple a day keeps the doctor away';
const replaceString = "*"
let stringResult = "";

for(let i = 0; i<exampleString.length; i++){
    if(exampleString[i] === 'a' || exampleString[i] === "A" ) {
        stringResult += replaceString;
    } else {
        stringResult += exampleString[i]
    }
} 
console.log(stringResult);

//

const exampleString2 = 'An apple a day keeps the doctor away';
const replacedString = exampleString.replace(/a/g, '*');
console.log(replacedString);

