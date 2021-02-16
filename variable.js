var border = "------------"

console.log(border)
var name = "Markro" // Tipe
var angka = 22
var todayIsFriday = false 

console.log(name) // "Markro"
console.log(angka) // 22
console.log(todayIsFriday) // false

console.log(border)
//Equal Operator (==)
var angka = 100
console.log(angka == 100) // true
console.log(angka == 20) // false
// if printed then the value must show true|false because the the console follow the var assigment

console.log(border)
//Not Equal ( != )
var person = "handsome"
console.log(person != "babyface") // true
console.log(person != "sharpeye") //true 
console.log(person != "handsome") //false because the value is same
// if printed then it will show true because the value of person is different with the var

console.log(border)
//Strict Equal ( === ) Besides comparing the two values, it is also strict to compare the data types whether they are the same or not
var angka = 8
console.log(angka == "8") // true, whereas "8" is a string.
console.log(angka === "8") // false, because the data types are different
console.log(angka === 8) // true 

console.log(border)
//Strict not Equal ( !== ) The opposite of equal strict .
var angka = 11
console.log(angka != "11") // false, even though "11" is a string
console.log(angka !== "11") // true, because the data types are different
console.log(angka !== 11) // false

console.log(border)
//less than & more than ( <, >, <=, >=)
var number = 17
console.log( number < 20 ) // true
console.log( number > 17 ) // false
console.log( number >= 17 ) // true, because there is an equal that show the value 
console.log( number <= 20 ) // true

//Conditional Operators, Operators that combine two truth values. There are AND (&&) and OR (||) operators
//OR ( || )
console.log(border)
console.log(true || true); // true
console.log(true || false); // true
console.log(true || false || false); // true
console.log(false || false); // false
//AND ( && )
console.log(border)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true && true); // false
console.log(true && true && true); // true 