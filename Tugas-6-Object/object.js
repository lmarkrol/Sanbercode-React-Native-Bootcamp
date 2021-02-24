console.log(' ')
console.log('Soal 1-Array To Object------------------------------------------------------------------------------------------')
console.log(' ')


function arrayToObject(people){

    var now = new Date()
    var thisYear = now.getFullYear()

    for(var i=0; i<people.length;i++){
        if(people[i][3]<thisYear){age1=thisYear-people[i][3]}
        else(age1="invalid birth year")

        var nama={
            firstname: people[i][0] ,
            lastname: people[i][1],
            gender:people[i][2],
            age:age1}
        console.log(`${nama.firstname} ${nama.lastname} :`)//${JSON.stringify(nama)}
        console.log(nama)
        }
       
        return '';
}
var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
console.log(arrayToObject(people)) 
console.log(arrayToObject(people2))



console.log(' ')
console.log('Soal 2-Shooping Time------------------------------------------------------------------------------------------')
console.log(' ')
var barang = [  ["Sepatu Stacattu", 1500000], 
                ["Baju Zoro", 500000],
                ["Baju H&N",  250000],
                ["Sweater Uniklooh", 175000],
                ["Casing Handphone",  50000]
            ]
function shoppingTime(memberid,money){
    var list=[]
    var harga=[]
    var kembalian=0
kembalian1=money-barang[0][1]
kembalian2=kembalian1-barang[1][1]
kembalian3=kembalian2-barang[2][1]
kembalian4=kembalian3-barang[3][1]
kembalian5=kembalian4-barang[4][1]


    if(memberid==null ||memberid==""){console.log('Mohon maaf, toko x hanya berlaku untuk member saja')}
    else if(money<=barang[4][1]){console.log('Mohon maaf, uang tidak cukup')}
    else {
        if((kembalian1>=0 && money>barang[0][1]+barang[1][1])){list.push(barang[0][0]);harga.push(barang[0][1])}
        if((kembalian1>0 && kembalian1>=barang[1][1])||(kembalian1<0 && money>=barang[1][1]+barang[2][1])){list.push(barang[1][0]);harga.push(barang[1][1])}
        if((kembalian2>0 && kembalian2>=barang[2][1])||(kembalian2<0 && money>=barang[2][1]+barang[3][1])){list.push(barang[2][0]);harga.push(barang[2][1])}
        if((kembalian3>0 && kembalian3>=barang[3][1])||(kembalian3<0 && money>=barang[3][1]+barang[4][1])){list.push(barang[3][0]);harga.push(barang[3][1])}
        if((kembalian4>0 && kembalian4>=barang[4][1])||(kembalian4<0 && money>=barang[4][1])){list.push(barang[4][0]);harga.push(barang[4][1])}
        for(var i=0; i<harga.length;i++){
            kembalian+=harga[i]
        }
        var nama={
            memberID: memberid ,
            Money: money,
            ListPurchased:list,
            ChangeMoney:money-kembalian}
            console.log(nama)
        }
    return '';
}

console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 10000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('1820RzKr8nWn08', 300000));






console.log(' ')
console.log('Soal 3-NaikAngkot------------------------------------------------------------------------------------------')
console.log(' ')
function naikAngkot(listpenumpang){
var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
var data=[]

    for(var i=0; i<listpenumpang.length;i++){
        var nama={
            penumpang: listpenumpang[i][0] ,
            naikdari: listpenumpang[i][1],
            tujuan: listpenumpang[i][2],
            bayar: (rute.indexOf(listpenumpang[i][2])-rute.indexOf(listpenumpang[i][1]))*2000
        }
        data.push(nama);
    }
        console.log(data)
        return '';
    }
    console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
    



