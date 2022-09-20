// FONKSİYONLAR========

//! 1.YÖNTEM: FUNCTION DECLARATION
//DECLARATION yöntemi ile fonksiyonun tanımlanması çağrılmasından önce ve sonra olabilir.

//fonksiyonun tanımlanması
// function yazdirAd()
//     {
//         console.log("Hakan");
//     }
//     fonksiyonun çağrılması
//     yazdirAd();//hakan

//     örnek:klavyeden girilen sayının tek mi çift mi olduğunu gösteren bir fonksiyon yazınız

//     const sayiniz=prompt("sayı giriniz");
//     console.log(tekCift(sayiniz));
//     function tekCift(sayimiz) {
//         return sayimiz%2==0?`${sayimiz} çifttir`: `${sayimiz} tektir`
//     }

    //?2.YÖNTEM: FUNCITON EXPRESSION (Bu yöntem daha yaygın)
    //örnek 1
    // const tekCift1=function(sayi){
    //     return sayi%2==0 ? "CİFT":"TEK";        
    // }
    // console.log(tekCift1(3));

    //örnek 2 verilen 3 sayıdan en büyük sayıyı bulma:

//     let buyukBul=function(a,b,c){
    
//     let enBuyuk;

//     if(a>b && a>c){
//     enBuyuk=a;
//     }
//     else if(b>c && b>a){
//     enBuyuk=b;
//     }
//     else{
//     enBuyuk=c;
//     }return enBuyuk;
// }
//     console.log(buyukBul(5,8,7));

//todo 3. YÖNTEM : FUNCTION ARROW (ok)

//const ciftMi=(sayi)=>(sayi%2==0?"cift":"tek");


const ciftMi=(num)=>(num%2==0?`${num} Cift`: `${num} Tek`);
console.log(ciftMi(8));
//console.log("sayi " + ciftMi(7));

//!örnek
const taban=prompt("taban gir");
const us=prompt("us giriniz");

const ustAl=(taban,us)=>taban**us;
console.log(ustAl(taban,us));


   


