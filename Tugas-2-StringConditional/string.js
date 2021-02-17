var border = "-----------------------------------"
var soal1 = "Jawaban soal ke 1 :"
var soal2 = "Jawaban soal ke 2 :"
var soal3 = "Jawaban soal ke 3 :"
var soal4 = "Jawaban soal ke 4 :"

// Soal No. 1 (Membuat kalimat),
// Terdapat kumpulan variable dengan data string sebagai berikut
var word = 'JavaScript'; 
var second = 'is'; 
var third = 'awesome'; 
var fourth = 'and'; 
var fifth = 'I'; 
var sixth = 'love'; 
var seventh = 'it!';
// Buatlah agar kata-kata di atas menjadi satu kalimat . Output:

// JavaScript is awesome and I love it! 

console.log(border)
console.log(soal1)
// Jawaban Soal nomor 1
console.log(word.concat(' ',second,' ',third,' ',fourth,' ',fifth,' ',sixth,' ',seventh));
// Jawaban Soal nomor 1



// Soal No.2 Mengurai kalimat (Akses karakter dalam string),
// Terdapat satu kalimat seperti berikut:

var sentence = "I am going to be React Native Developer"; 

// Buat menjadi Output berikut:

// First word: I 
// Second word: am 
// Third word: going 
// Fourth word: to 
// Fifth word: be 
// Sixth word: React 
// Seventh word: Native 
// Eighth word: Developer

console.log(border)
console.log(soal2)
// Jawaban Soal nomor 2
var firstWord = sentence[0] ; 
var secondWord = sentence[2] + sentence[3]; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9]; 
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21]; 
var seventhWord = sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28]; 
var eighthWord = sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38];

console.log('First Word: ' + firstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)
// Jawaban Soal nomor 2



// Soal No. 3 Mengurai Kalimat (Substring)
var sentence2 = 'wow JavaScript is so cool'; 

// Uraikan lah kalimat sentence2 di atas menjadi kata-kata penyusunnya. Output:

// First Word: wow 
// Second Word: JavaScript 
// Third Word: is 
// Fourth Word: so 
// Fifth Word: cool 

console.log(border)
console.log(soal3)
// Jawaban Soal nomor 3
var firstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14); 
var thirdWord2 = sentence2.substring(15, 17); 
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2 = sentence2.substring(21, 25);

console.log('First Word: ' + firstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);
// Jawaban Soal nomor 3


// Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String
var sentence3 = 'wow JavaScript is so cool'; 

// Output:

// First Word: wow, with length: 3 
// Second Word: JavaScript, with length: 10 
// Third Word: is, with length: 2 
// Fourth Word: so, with length: 2 
// Fifth Word: cool, with length: 4


console.log(border)
console.log(soal4)
// Jawaban Soal nomor 4
var firstWord3 = sentence3.substring(0, 3); 
var secondWord3 = sentence3.substring(4, 14); 
var thirdWord3 = sentence3.substring(15, 17);  
var fourthWord3 = sentence3.substring(18, 20);
var fifthWord3 = sentence3.substring(21, 25); 

var firstWordLength = firstWord3.length  
var secondWordLength = secondWord3.length
var thirdWordLength = thirdWord3.length
var fourthWordLength = fourthWord3.length
var fifthWordLength = fifthWord3.length
console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length ' + secondWordLength); 
console.log('Third Word: ' + thirdWord3 + ', with length ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord3 + ', with length ' + fifthWordLength); 
// Jawaban Soal nomor 4
