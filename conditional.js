var border ="-----------------------------"
// Hari 2 – Javascript – Conditional
// Kondisional adalah sebuah metode yang melakukan pengecekan terhadap suatu pernyataan atau premis apakah bernilai benar atau tidak, jika benar maka akan menjalankan sebuah block code tertentu.

// Kondisional dengan if / else if / else 
// Contoh 1 menjalankan kode jika premis bernilai true
console.log(border)
if ( true ) {
    console.log("jalankan code")
}
// Contoh 2 kode tidak dijalankan jika premis bernilai false
if ( false ) {
    console.log("code tidak dijalankan")
}
// Contoh 3 Premis dengan perbandingan suatu nilai
var mood = "happy"
if ( mood == "happy" ) {
    console.log("hari ini aku bahagia!")
}


// Di dalam kondisional dikenal juga dengan istilah branching atau percabangan. Dengan percabangan kita bisa mengecek nilai kebenaran dari berbagai premis yang kita sediakan. cara menambahkan kondisi atau premis lain dari premis pertamanya adalah dengan sintaks else . Contohnya ketika kita diminta untuk membeli telur dan buah ke minimarket oleh ibu kita maka akan banyak sekali kondisi atau kemungkinan yang terjadi dalam perjalanan kita membeli barang-barang tersebut di supermarket.
console.log(border)
// Contoh 4 Branching sederhana
var minimarketStatus = "open"
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else {
    console.log("minimarketnya tutup")
}
if ( minimarketStatus == "close" ) {
    console.log("saya akan membeli telur dan buah")
} else {
    console.log("minimarketnya tutup")
}
// Kondisi else di atas adalah kondisi selain minimarketStatus == "open" .

// Contoh 5 Branching dengan kondisi
var minimarketStatus2 = "close"
var minuteRemainingToOpen = 5
if ( minimarketStatus2 == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else if ( minuteRemainingToOpen <= 5 ) {
    console.log("minimarket buka sebentar lagi, saya tungguin")
} else {
    console.log("minimarket tutup, saya pulang lagi")
}

var minimarketStatus3 = "close"
var minuteRemainingToOpen3 = 5
if ( minimarketStatus3 == "close" ) {
    console.log("saya akan membeli telur dan buah")
} else if ( minuteRemainingToOpen3 <= 5 ) {
    console.log("minimarket buka sebentar lagi, saya tungguin")
} else {
    console.log("minimarket tutup, saya pulang lagi")
}

var minimarketStatus4 = "close"
var minuteRemainingToOpen = 6
if ( minimarketStatus4 == "open" ) {
    console.log("saya akan membeli telur dan buah")
} else if ( minuteRemainingToOpen <= 5 ) {
    console.log("minimarket buka sebentar lagi, saya tungguin")
} else {
    console.log("minimarket tutup, saya pulang lagi")
}
// contoh di atas kita memberikan kondisi tambahan yaitu jika minimarket akan buka kurang atau sama dengan 5 menit lagi maka saya akan menunggu.

// Selain Branching atau percabangan, kondisional juga dapat memiliki sarang atau tumpukan yaitu terdapat kondisional di dalam sebuah kondisional.
console.log(border)
// Contoh 6 Kondisional bersarang
var minimarketStatus = "open"
var telur = "soldout"
var buah = "soldout" 
if ( minimarketStatus == "open" ) {
    console.log("saya akan membeli telur dan buah")
    if(telur == "soldout" || buah == "soldout" ) {
        console.log("belanjaan saya tidak lengkap")    
    } else if( telur == "soldout") {
        console.log("telur habis")
    } else if ( buah == "soldout" ) {
        console.log("buah habis")
    }
} else {
    console.log("minimarket tutup, saya pulang lagi")
}
// pada kondisi di atas minimarketnya sudah buka lalu cek kondisi selanjutnya cek apakah telur atau buah habis. Karena kondisinya adalah jika telur ATAU buah salah satunya ada yang soldout maka belanjaan saya lengkap. Demikian seterusnya akan mengecek kondisi-kondisi yang disediakan dalam logika program yang dibuat.

// Kondisional dengan Switch Case 
// Cara lain untuk melakukan pengecekan kondisi atau conditional adalah dengan switch case. Penggunaan switch case mirip seperti kita menyalakan tombol switch pada remote. Jika kondisi tombol yang dipijit adalah tombol dengan nomer tertentu maka akan menjalankan prorgram tertentu.
console.log(border)
// Contoh 7 Kondisional dengan switch case
var buttonPushed = 1;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}

  var buttonPushed = 4;
switch(buttonPushed) {
  case 1:   { console.log('matikan TV!'); break; }
  case 2:   { console.log('turunkan volume TV!'); break; }
  case 3:   { console.log('tingkatkan volume TV!'); break; }
  case 4:   { console.log('matikan suara TV!'); break; }
  default:  { console.log('Tidak terjadi apa-apa'); }}
// Pada kode di atas, switch akan mengevaluasi nilai buttonPushed jika case yang ditemui cocok dengan nilai yang diberikan maka kode pada case tersebut akan dijalankan sehingga pada console akan dimunculkan “matikan TV!“. Pada setiap case terdapat break yang berfungsi untuk menghentikan proses switch agar tidak menjalankan case yang lain. Juga terdapat default yaitu kondisi dimana tidak ditemukan case yang sesuai.