let nomor = 1

console.log(`\n-----Jawaban Soal Nomor ${nomor++}-----\n`)


let golden = goldenFunction = ()=>{
    console.log("this is golden!!")
}

golden()

console.log(`\n-----Jawaban Soal Nomor ${nomor++}-----\n`)

let newFunction = literal = (firstName, lastName)=>{
    return {
      firstName: firstName,
      lastName: lastName,
      fullName() {console.log(`${firstName} ${lastName}`)}
    }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName()

  console.log(`\n-----Jawaban Soal Nomor ${nomor++}-----\n`)

  const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation} = newObject
//Driver Code
console.log(firstName, lastName, destination, occupation) 

console.log(`\n-----Jawaban Soal Nomor ${nomor++}-----\n`)

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]
//Driver Code
console.log(combined)


console.log(`\n-----Jawaban Soal Nomor ${nomor++}-----\n`)


const planet = "earth"
const view = "glass"
var before = `Lorem  ${view} dolor sit amet,`+ 
    `consectetur adipiscing elit,  ${planet}  do eiusmod tempor  `+
    `incididunt ut labore et dolore magna aliqua. Ut enim `+
     `ad minim veniam`
 
// Driver Code
console.log(before) 

