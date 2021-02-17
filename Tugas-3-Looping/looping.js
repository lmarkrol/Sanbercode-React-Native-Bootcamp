// Tugas 3 - Looping
//Soal No 1
console.log('-----------------------------------')
console.log('No. 1 Looping Menggunakan While')
console.log('-----------------------------------')
console.log('Looping PERTAMA')
var flag = 2;
while(flag <= 20) { 
  console.log(flag + ' - I Love coding');
  flag+=2
}
console.log('-----------------------------------')
console.log('Looping KEDUA')
var jumlah = 20;
while(jumlah > 1) {   
  console.log( jumlah + ' - I Will become a mobile developer ');
  jumlah-=2
}
 //Soal No 2
console.log('-----------------------------------')
console.log('No. 2 Looping Menggunakan For')
console.log('-----------------------------------')

for(var angka = 1; angka <= 20; angka ++) {
    if(angka %3 ==0 && angka%2==1 ){console.log(angka + ' - I Love Coding')}
    else if(angka %2 == 1){console.log(angka + ' - Santai')}
    else(console.log(angka + ' - Berkualitas'))
    
  }
   
//Soal No 3
console.log('-----------------------------------')
console.log('No. 3 Membuat Persegi Panjang #')
console.log('-----------------------------------')
var bar= ''
for (var x= 1; x <= 4; x++){
  for (var y =1; y<=8 ; y++){
    bar+="#"
  }
  bar+='\n'
}
console.log(bar)


 //Soal No 4
console.log('-----------------------------------')
console.log('No. 4 Membuat Tangga')
console.log('-----------------------------------')
var bar= ''
for (var x= 1; x <= 7; x++){
  for (var y =1; y<=x ; y++){
    bar+="#"
  }
  bar+='\n'
}
console.log(bar)

//Soal No 5
console.log('-----------------------------------')
console.log('No. 5 Membuat Papan Catur')
console.log('-----------------------------------')

for (var x= 1; x<= 8; x++){
  var bar1=''
  for (var y =1; y<=8 ; y++){
    if((x+y+1)%2==1){bar1+=' '}
    else(bar1+='#')
  }
  console.log(bar1);

}
