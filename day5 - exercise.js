// 1. 
function lowHighAvg(arr) { // versi SORT ======
    arr.sort((a, b) => a -b) ; // sort untuk urutin array secara ascending, dilanjut dengan function perbandingan
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i]
    }
    return [arr[arr.length -1], +arr[0], sum/arr.length]
}
console.log(lowHighAvg([12, 5, 23, 18, 4, 45, 32]))

// function minMaxAverage(arr){ // TANPA SORT ======
//     let max = arr[0];
//     let min = arr[0];
//     let average = arr[0];
    
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         if(arr[i] > max){
//             max = arr[i];
//         }
//         average = average + arr[i];
//     }
//     return[min, max, average/arr.length];
//     }
//     console.log(minMaxAverage([12, 5, 23, 18, 4, 45, 32]))

// 2.
function wordsConcat(arr) {
    if (arr.length === 0) return "";  
    if (arr.length === 1) return arr[0];  

    let result = "";
    for (let i = 0; i < arr.length - 1; i++) {
        result += arr[i] + ",";
    }
    result += " and " + arr[arr.length - 1]; 
    return result;
}
const fruits = ["apple", " banana", " cherry", "date"];
console.log(wordsConcat(fruits))

// 3.   
function splitStringIntoWords(str) { // deklrasi function splitStringIntoWords, dengan parameter str
    return str.split(" "); //parameter str akan dipecah pakai method split untuk karakter2 tsb
}
console.log(splitStringIntoWords("Hello World"));  

// 4.
function tambah(arr1, arr2){
    if (arr1.length !== arr2.length);{ // untuk cek apakah kedua array jumlah lengthnya sama
    
    }

    var result = []; // array kosong untuk menaruh jawaban

    for (var i =0; i < arr1.length; i++){ // untuk mengiterasikan elemen2 array2 nantinya
         result.push(arr1[i] + arr2[i]); // untuk menambahkan elemen2 dari kedua array
    }
    return result;
}
const deretA = [1, 2, 3];
const deretB = [3, 2, 1];
console.log(tambah(deretA, deretB));

// 5.
function uniqueElem(arr, newElem){ // bikin function yang berisi 2 parameter
    if(!arr.includes(newElem)) { // conditional dengan method includes, untuk cek yang mana kalu ada elemen yang tidak termasuk di array awal, makan akan dianggap false, sehingga bisa lanjut
        arr.push(newElem); // untuk melanjutkan sebelumnya, kali ini menggunakan push supaya bisa tambahin elemen baru
    }
    return arr;
}

const elements = [1, 2, 3, 4];
const newElement = 7
console.log(uniqueElem(elements,newElement));

// 6.
function removeOddNumbers(arr) { // buat function bernama removeOddNumbers dan parameternya arr
    return arr.filter(num => num % 2 === 0) // pakai method filter() , kemudian menggunakan num % 2 === 0 buat memeriksa apakah angka genap
    // - di sini filter akan bekerja yang mana apabila hasilnya benar maka akan di include, apabila tidak akan dikecualikan
    
}
const numbers = [1, 2, 3, 4, 5, 6,]; 
const evenNumbers = removeOddNumbers(numbers);
console.log(evenNumbers);

// 7.
function insertIntegers(maxSize, ...integers) { // buat function dengan 2 parameter, parameter "integers" pakai rest parameter untuk ngumpulin semua integers dan masuk ke array "integers" nantinya
    let result = []; // array kosong untuk naruh integers2 
    for (let i = 0; i < integers.length && result.length < maxSize; i++) { // loop untuk mengiterasikan tiap integer di 'integers' array tadi, length dari result kurang dari 'maxSize
        result.push(integers[i]); // di dalam loop tiap integer di push ke array result pakai method push
    }
    return result;
}
const maxSize = 5;
const integers = [5, 10, 24, 3, 6, 7, 8];
console.log(insertIntegers(maxSize, ...integers));

// 8.
function concatArr(arr1, arr2){ // buat function dengan memasukkan 2 parameter yang nantinya bakal disatukan
    return arr1.concat(arr2) //  direturn supaya nanti kedua array bisa digabungkan pakai built in method concat
}

const arr1 = [1,2,3];
const arr2 = [4,5,6];

console.log(concatArr(arr1, arr2));



// 9.

function findDuplicates(array){
    const duplicates = []; // bikin array kosong untuk naruh elemen duplikat yang ditemukan di input array
    
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) { // nested loop untuk membandingkan elemen dengan elemen setelahnya di array
            if (array[i] === array[j] && !duplicates.includes(array[i])){ // apabila ada persamaan dan duplikat belum ada di array 'duplicates',
                duplicates.push(array[i]) // akan nambah elemen duplikat ke dalam array
            }
        }
    }

    return duplicates;
}

const numList = [1, 2, 2, 2, 3, 3, 4, 5, 5];
console.log(findDuplicates(numList));

// 10. 
function findArrayDifference(arr1, arr2) { 
    let result = []; // buat array kosong untuk menaruh perbedaan

    for (let i = 0; i < arr1.length; i++) {  // for loop iterasi arr1
        if (!arr2.includes(arr1[i])) { //conditional untuk cek elemen dari arr1 tidak di arr2
            result.push(arr1[i]); //kalau bukan, masuk ke 'result' array
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            result.push(arr2[i]);
        }
    }

    return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findArrayDifference(array1, array2)); 

// 11.
function filterPrimitives(arr) {
    return arr.filter(item => { // arrow function, pakai filter method untuk membuat array baru yang berisikan elemen yang sudah
        return (typeof item !== 'object' && typeof item !== 'function') || item === null; // operator typeof untuk cek tipe elemen dari 'item' di dalam array
    });                                     // digunakan untuk keep elemen yang bukan object/function
}                                           // condition tsb memastikan hanya primitive data types (number, string, boolean, undefined, dan null)yang  termasuk di filter

const arr = [1, [], undefined, {}, "string", {}, []];
console.log(filterPrimitives(arr));

// 12. 
function findsecondLowest (arr) {
    arr.sort(function(a, b) { // pakai sort supaya list array nanti bisa urut
        return a - b;
    });
    let secondLowest = arr[1]; // setelah sorting, elemen kedua di array yajg sudah berurutan tadi aan masuk ke variabel secondLowest

    return [secondLowest] ; // return supaya muncul hasilnya nanti
}
const arrayNum = [5, 3, 1, 7, 2, 6]
console.log(findsecondLowest(arrayNum));

// 13. 
function sumNumbersFromArray(mixedArray) {
    let sum = 0;
    for (let i = 0; i < mixedArray.length; i++) {
      if (typeof mixedArray[i] === 'number' && !isNaN(mixedArray[i])) {
        sum += mixedArray[i];
      }
    }
    return sum;
  }
  
  const mixedArray = ["3", 1, "string", null, false, undefined, 2];
  console.log(sumNumbersFromArray(mixedArray)); 

  // 14. 
 
  // 15. 
  function playRPS(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const compChoice = choices[Math.floor(Math.random() * choices.length)]

    if (playerChoice === compChoice){
        return "Tie"
    } else if (
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "paper" && compChoice === "rock") ||
        (playerChoice === "scissors" && compChoice === "paper")
    ) {
        return "You win"
    } else {
        return "Computer wins"
    }
  }

  const playerChoice = "paper"

  const result = playRPS(playerChoice);
  
  console.log(result);