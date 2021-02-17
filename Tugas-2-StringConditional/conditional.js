//Soal No 1 werewolf
console.log('  ')
console.log('Soal 1 WereWolf Game')
var Nama = 'Marina'
var Peran = 'WereWolf'
var Nama1 = Nama.toLowerCase()
var Peran1 = Peran.toLowerCase()
if (Nama1 == ''){console.log('nama harus diisi!')} 
else if ((Nama1 == 'Markro' || Nama1 == 'Marline' || Nama1 == 'Marina' || Nama1 == 'Marco') && Peran1 == '' ){console.log ('Halo ' + Nama + ', Pilih peranmu untuk memulai game!')}
else if ((Nama1 == 'Markro' || Nama1 == 'Marline' || Nama1 == 'Marina' || Nama1 == 'Marco') && Peran1 == 'penyihir' ){
    console.log ('Selamat datang di dunia werewolf, ' + Nama )
    console.log ('Halo Penyihir ' + Nama + ', kamu dapat melihat siapa yang menjadi werewolf!')
}
else if ((Nama1 == 'Markro' || Nama1 == 'Marline' || Nama1 == 'Marina' || Nama1 == 'Marco') && Peran1 == 'guard' ){
    console.log ('Selamat datang di dunia werewolf, ' + Nama )
    console.log ('Halo Guard ' + Nama + ', kamu akan membantu melindungi temanmu dari serangan werewolf.')
}
else if ((Nama1 == 'Markro' || Nama1 == 'Marline' || Nama1 == 'Marina' || Nama1 == 'Marco') && Peran1 == 'werewolf' ){
    console.log ('Selamat datang di dunia werewolf, ' + Nama )
    console.log ('Halo Werewolf ' + Nama + ', Kamu akan memakan mangsa setiap malam!')
}
else {console.log('Nama / Peran Tidak terdaftar, silahkan pilih kembali')}


//Soal No 2 format tanggal
console.log('  ')
console.log('Soal 2 Format Tanggal')

var Day = 30
var Month = 12
var Year = 1900
switch (Month) {
case 1: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Januari '+Year)}
else {console.log('Something is wrong')}; break;
case 2: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Februari '+Year)}
else {console.log('Something is wrong')}; break;
case 3: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Maret '+Year)}
else {console.log('Something is wrong')}; break; 
case 4: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' April '+Year)}
else {console.log('Something is wrong')}; break; 
case 5: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Mei '+Year)}
else {console.log('Something is wrong')}; break;
case 6: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Juni '+Year)}
else {console.log('Something is wrong')}; break;
case 7: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Juli '+Year)}
else {console.log('Something is wrong')}; break; 
case 8: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Agustus '+Year)}
else {console.log('Something is wrong')}; break; 
case 9: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' September '+Year)}
else {console.log('Something is wrong')}; break; 
case 10: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Oktober '+Year)}
else {console.log('Something is wrong')}; break;
case 11: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' November '+Year)}
else {console.log('Something is wrong')}; break;
case 12: if ((Day<=31 && Day>=1) && (Year<=2200 && Year>=1900)){console.log(Day+' Desember '+Year)}
else {console.log('Something is wrong')}; break; 
default: console.log('Something is missing');break;
} 
