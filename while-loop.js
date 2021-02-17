// Contoh Looping While-loop 1 Looping Angka 1-9 Sederhana

var flag = 1;
while(flag < 10) { // Loop akan terus berjalan selama nilai flag masih dibawah 10
  console.log('Iterasi ke-' + flag); // Menampilkan nilai flag pada iterasi tertentu
  flag++; // Mengubah nilai flag dengan menambahkan 1
}

// contoh Looping While-loop 2 Looping Mengembalikan Angka Total

var deret = 5;
var jumlah = 0;
while(deret > 0) { // Loop akan terus berjalan selama nilai deret masih di atas 0
  jumlah += deret; // Menambahkan nilai variable jumlah dengan angka deret
  deret--; // Mengubah nilai deret dengan mengurangi 1
  console.log('Jumlah saat ini: ' + jumlah)
}

console.log(jumlah);


// Contoh Looping For-loop 1 Looping Angka 1-9 Sederhana

for(var angka = 1; angka < 10; angka++) {
  console.log('Iterasi ke-' + angka);
} 

// Contoh Looping For-loop 2 Looping Mengembalikan Angka Total

var jumlah = 0;
for(var deret = 5; deret > 0; deret--) {
  jumlah += deret;
  console.log('Jumlah saat ini: ' + jumlah);
}
 
console.log('Jumlah terakhir: ' + jumlah);


// Contoh Looping For-loop 3 Looping Dengan Increment dan Decrement Lebih dari 1

for(var deret = 0; deret < 10; deret += 2) {
  console.log('Iterasi dengan Increment counter 2: ' + deret);
}
 
console.log('-------------------------------');
 
for(var deret = 15; deret > 0; deret -= 3) {
  console.log('Iterasi dengan Decrement counter : ' + deret);
} 