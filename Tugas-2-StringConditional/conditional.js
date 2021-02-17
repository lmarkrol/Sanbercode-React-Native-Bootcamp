var border = "-----------------------------------------------------------"

// Tugas Conditional
// If-else

console.log(border)
// Output untuk Input nama = '' dan peran = ''
var nama = ""
var peran = ""

if ( nama == "" ) {
    console.log("Nama harus diisi!")
} else {
    console.log("Nama telah dipilih")
}


console.log(border)
//Output untuk Input nama = 'John' dan peran = ''
var nama = "John"
var peran = ""

if ( peran == "Penyihir" || peran == "Guard" || peran == "Werewolf" ) {
    console.log("Peran Terpilih!")
} else {
    console.log("Halo John, Pilih peranmu untuk memulai game!")
}


console.log(border)
//Output untuk Input nama = 'Jane' dan peran 'Penyihir'
var nama = "Jane"
var peran = "Penyihir"

if ( nama == "Jane") {
    console.log("Selamat datang di Dunia Penyihir, Jane")

if ( peran == "Penyihir") {
    console.log("Halo Penyihir Jane, kamu dapat melihat siapa yang menjadi werewolf!")
    } else if( peran == "Guard") {
    console.log("Halo Guard Jane, kamu akan membantu melindungi temanmu dari serangan werewolf.")
    } else if( peran == "Werewolf") {
    console.log("Halo Werewolf Jane, Kamu akan memakan mangsa setiap malam!")
    }

} else {
    console.log("Data tidak sesuai, silahkan masukan nama dan pilih peran")
}

console.log(border)
//Output untuk Input nama = 'Jenita' dan peran 'Guard'
var nama = "Jenita"
var peran = "Guard"

if ( nama == "Jenita") {
    console.log("Selamat datang di Dunia Guard, Jenita")

if ( peran == "Penyihir") {
    console.log("Halo Penyihir Jenita, kamu dapat melihat siapa yang menjadi werewolf!")
    } else if( peran == "Guard") {
    console.log("Halo Guard Jenita, kamu akan membantu melindungi temanmu dari serangan werewolf.")
    } else if( peran == "Werewolf") {
    console.log("Halo Werewolf Jenita, Kamu akan memakan mangsa setiap malam!")
    }

} else {
    console.log("Data tidak sesuai, silahkan masukan nama dan pilih peran")
}

console.log(border)
//Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'
var nama = "Junaedi"
var peran = "Werewolf"

if ( nama == "Junaedi") {
    console.log("Selamat datang di Dunia Werewolf, Junaedi")

if ( peran == "Penyihir") {
    console.log("Halo Penyihir Junaedi, kamu dapat melihat siapa yang menjadi werewolf!")
    } else if( peran == "Guard") {
    console.log("Halo Guard Junaedi, kamu akan membantu melindungi temanmu dari serangan werewolf.")
    } else if( peran == "Werewolf") {
    console.log("Halo Werewolf Junaedi, Kamu akan memakan mangsa setiap malam!")
    }

} else {
    console.log("Data tidak sesuai, silahkan masukan nama dan pilih peran")
}

console.log(border)


// Tugas Conditional
// Switch Case

// var buttonPushed = 1;
// switch(buttonPushed) {
//   case 1:   { console.log('matikan TV!'); break; }
//   case 2:   { console.log('turunkan volume TV!'); break; }
//   case 3:   { console.log('tingkatkan volume TV!'); break; }
//   case 4:   { console.log('matikan suara TV!'); break; }
//   default:  { console.log('Tidak terjadi apa-apa'); }}


var hari = "21"
var bulan = "1" 
var tahun = "1945"

if ( bulan == "1") {
  console.log(hari.concat(' ', "Januari",' ', tahun));
}