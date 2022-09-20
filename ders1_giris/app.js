//===============================================
//KONSOL
console.log("Hello javascript");
//alert("dikkat");
console.warn("bu bir uyarıdır");
console.error("bu bir hatadır");
//prompt("adınızı giriniz"); //kullanıcıdan veri isteme

//========== değişken tanımlama=======
//======VAR======
var isim="bilal";
console.log(typeof isim);
isim=3.14;
console.log(typeof isim);


//===========CONST========
const piSayisi=3.14;
//piSayisi=3;



const isim1="Semra";
console.log(typeof isim1);
// const number; hatalı yazım
// number=4;

//============LET===============

let fiyat;
fiyat=10;
console.log(typeof fiyat);
fiyat="Can";
console.log(fiyat);

//string tanımlamak için 3 farklı karakter kullanılabilir.
let name1="Alattin";
let name2='Faruk';
let name3=`Oguzhan`;
console.log(name3);

// =====ARİTMETİK OPERATÖRLER====

const kola=5;
const cips=6;
const ekmek=2;
console.log(kola+cips+ekmek);
console.log("toplam fiyat", kola+cips+ekmek);

const ad="can";
const soyad="canan";
console.log(ad+soyad);

const s1=7;
let s2="7";
console.log(s1+s2);//77

console.log("benim adım"+" "+ ad+" "+"benim yaşım"+" "+s1);
//! Teplate literal==================
console.log(`benim adım ${ad} benim yasım ${s1}`);
//Üs alma **
const taban=2;
const us=3;
console.log(taban**us);//2*2*2=8

//mod alma %
const sayi=123;
const birler=sayi%10;
console.log(birler);

// karşılaştırma operatörleri
const s3=5;
const s4="5";
console.log(s3==s4); //string integer diye ayırmadan aynı sayıyı aynı tür kabul ediyor
console.log(s3===s4);// aynı sayının türüne göre true veya false yazıyor.


//todo TİP DEĞİŞİMLERİ

const para="100";
console.log(para+15);//toplamaz yanyana yazar 10015
console.log(Number(para)+15);//toplama yapar 115 / stringi sayısya döndürme

const sayi5=56
console.log(String(sayi5)+sayi5); //sayıyı stringe döndürme
console.log(typeof sayi5);//sayi5 aslında number sadece consolda string oluyor
