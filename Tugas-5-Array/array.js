//Soal 1
console.log(' ')
console.log('Soal 1-Range')
console.log(' ')


function range(num1,num2){
    var input=[]
    
    if(num1<=num2){for(var x = num1; x <= num2; x++){input.push(x)}}
    else if(num1>=num2){for(var y = num1; y >= num2; y--){input.push(y)}} 
    else{input.push(-1)} 
      return input
}

console.log(range(1,10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54,50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1



//Soal 2
console.log(' ')
console.log('Soal 2-Range with step')
console.log(' ')


function rangeWithStep(num1,num2,num3){
    var input=[]
    
    if(num1<=num2){for(var x = num1; x <= num2; x+=num3){input.push(x)}}
    else if(num1>=num2){for(var y = num1; y >= num2; y-=num3){input.push(y)}} 
    else{input.push(-1)} 
      return input
}

console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 



//Soal 3
console.log(' ')
console.log('Soal 3-Sum Of Range')
console.log(' ')


function sum(num1,num2,num3){
    
    
    var input=0
    if(num1==null){for(var x = 0; x <= 0; x+=1){input+=x}}
    if(num2==null){for(var x = num1; x <= num1; x+=1){input+=x}}
    if(num3==null){if(num1<=num2){for(var x = num1; x <= num2; x+=1){input+=x}}
    else if(num1>=num2){for(var y = num1; y >= num2; y-=1){input+=y}}
    }
    else if(num3==null){for(var y = num1; y <= num2; y-=1){input+=y}}
    else if(num1<=num2){for(var x = num1; x <= num2; x+=num3){input+=x}}
    else if(num1>=num2){for(var y = num1; y >= num2; y-=num3){input+=y}}
    
      return input
}

console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 



//Soal 4
console.log(' ')
console.log('Soal 4-Array Multidimensi')
console.log(' ')
function datadiri(nomor,nama,tanggallahir,tempatlahir,hobi){
var data='Nomor ID: ' + nomor +'\n'+'Nama Lengkap: '+nama+'\n'+'TTL: '+tanggallahir+', '+tempatlahir+'\n'+'Hobi: '+hobi
return data}

var multidim = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

a=multidim[0][0];b=multidim[0][1];c=multidim[0][2];d=multidim[0][3];e=multidim[0][4];
f=multidim[1][0];g=multidim[1][1];h=multidim[1][2];i=multidim[1][3];j=multidim[1][4];
k=multidim[2][0];l=multidim[2][1];m=multidim[2][2];n=multidim[2][3];o=multidim[2][4];
p=multidim[3][0];q=multidim[3][1];r=multidim[3][2];s=multidim[3][3];t=multidim[3][4];

console.log(datadiri(a,b,c,d,e))
console.log(' ')
console.log(datadiri(f,g,h,i,j))
console.log(' ')
console.log(datadiri(k,l,m,n,o))
console.log(' ')
console.log(datadiri(p,q,r,s,t))



//Soal 5
console.log(' ')
console.log('Soal 5-Balik Kata')
console.log(' ')
function balikKata(kata){
var bk=kata;
var newbk=''
for(var i=bk.length-1 ; i>=0; i--){
    newbk+=bk[i]}
    return newbk
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 




//Soal 6
console.log(' ')
console.log('Soal 6-Metode Array')
console.log(' ')
function datahandling(nomor,nama,tempatlahir,tanggallahir,hobi){
    var input = [nomor, nama, tempatlahir, tanggallahir, hobi];
    input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung')
    input.splice(4,1,'Pria','SMA Internasional Metro')
    return input
}
var input1 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]                         //input
    var nomor=input1[0]
    var nama=input1[1]
    var tempatlahir=input1[2]
    var tanggallahir=input1[3]
    var hobi=input1[4]
console.log(datahandling(nomor,nama,tempatlahir,tanggallahir,hobi))
    var tanggal=tanggallahir.split('/')
    var Bulan = Number(tanggal[1])
switch (Bulan) {
case 1: console.log('*Januari '); break;
case 2: console.log('*Februari '); break;
case 3: console.log('*Maret '); break;
case 4: console.log('*April '); break;
case 5: console.log('*Mei '); break;
case 6: console.log('*Juni '); break;
case 7: console.log('*Juli '); break;
case 8: console.log('*Agustus '); break;
case 9: console.log('*September '); break;
case 10:console.log('*Oktober '); break;
case 11: console.log('*November '); break;
case 12: console.log('*Desember '); break;
default: console.log('*Tidak bisa input');break;}
    tanggal1=tanggal
    tanggal1.sort(function (value1, value2) { return value2 - value1 } ) ;
console.log(tanggal1)
    var tanggal2 = tanggallahir.split('/').join("-")
console.log(tanggal2) 
console.log(nama)






