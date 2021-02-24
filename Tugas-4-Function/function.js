//Jawaban Soal 1
console.log('-------------------')
console.log('Jawaban Soal 1')
console.log('-------------------')

function teriak(){
var kata='Halo Sanbers!'
return kata
}
console.log(teriak())

//Jawaban Soal 2
console.log('-------------------')
console.log('Jawaban Soal 2')
console.log('-------------------')

function kalikan(num1, num2){
    return num1*num2
}
var num1=12
var num2=4
var hasilkali=kalikan(num1, num2)
console.log(hasilkali) // hasil 48 karena function 12*4

//Jawaban Soal 3
console.log('-------------------')
console.log('Jawaban Soal 3')
console.log('-------------------')

function introduce(name, age, address, hobby){
var introducing='Hi there! My name is '+name+', I am '+age+' years old, my home address is on  '+address+', and I like to do '+hobby+' as my hobbies.'
    return introducing
}
var name='Markro'
var age=24
var address='Newtown boyd, New South Wales, SA'
var hobby='Programming, Reading, Ping-Pong, and Chess'
var information=introduce(name, age, address, hobby)
console.log(information)
