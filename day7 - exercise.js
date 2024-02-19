// 1.
function objEquality(arr1, arr2) {
  var array1 = Object.getOwnPropertyNames(arr1); // fungsi getOwnPropertyNames untuk mengambil array dari nama" prooperty dari object
  var array2 = Object.getOwnPropertyNames(arr2);

  if (array1.length != array2.length) {
    // conditional if untuk cek apakah panjang kedua propety sama
    return false; //kalau tidak, direturm false
  }
  for (let i = 0; i < array1.length; i++) {
    // looping object pertama
    let val1 = arr1[array1[i]];
    let val2 = arr2[array1[i]];
    let isObjects = isObject(val1) && isObject(val2); //untuk cek apakah kedua value tsb object

    // jika keduanya objek, pakai func isEqual untuk cek persamaan
    // kalau bukan objek, cukup periksa persamaan value
    if ((isObjects && !isEqual(val1, val2)) || (!isObjects && val1 !== val2)) {
      return false; // kalau beda, returnnya false
    }
  }
  return true; // kalau seluruh properti sama, direturn true
}
function isObject(object) {
  // func isObject untuk cek apakah variabel tsb object
  return object != null && typeof object === "object";
}
const A = { a: 2 };
const B = { a: 1 };
console.log(objEquality(A, B));

// 2.
function getIntersection(obj1, obj2) {
  const intersection = {}; // deklrasi untuk menyimpan hasil properti

  for (const key in obj1) {
    // loop untuk iterasi setiap di object1
    if (obj2.hasOwnProperty(key)) {
      // di setiap iterasi dilakukan pengecekan apakah object2 memiliki properti yang sama pakai hasOwnProperty,
      intersection[key] = obj1[key]; // jika iya nantinya nilai tersebtt dari object1 disalin ke object intersection
    }
  }
  return intersection;
}

const object1 = { a: 1, b: 2 };
const object2 = { a: 1, c: 3 };
console.log(getIntersection(object1, object2));

// 3.
const data1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];
const data2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];
function mergeData(arr1, arr2) {
  let mergedArr = arr1.concat(arr2); // digunakan untuk menggabungkan dua array

  let uniqueArr = mergedArr.filter((item, index) => {
    //filter dipake untuk memastikan hanya object yang unique/tidak duplkkat yang masuk ke array uniqueArr
    return mergedArr.findIndex((obj) => obj.name === item.name) === index; // hasilnya jika index object sama dengan index dari object pertama dengan nama yang sama, maka object tersbuet dianggap unik
  });
  return uniqueArr; // direturn untuk object" unique tadi
}
console.log(mergeData(data1, data2));

// 4.
function switchProperty(arr) {
  return arr.map((object) => {
    const switchedObject = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        switchedObject[object[key]] = key;
      }
    }
    return switchedObject;
  });
}
console.log(switchProperty([{ name: "David", age: 20 }]));
// 5.

function factorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1); // jika num tadi tidak sama dengan 0, maka function akan memanggil dan mengalikann num dari hasil tersebut, terus berlanjut sampai num mencapai 0
  }
}

const n = 5;
console.log(factorial(n));
