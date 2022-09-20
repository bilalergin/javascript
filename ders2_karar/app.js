//==KARAR YAPILARI==

//=====IF-ELSE====

// const s1=Number(prompt("birinci sayı"));
// const islem=prompt("işlemi giriniz");
// const s2=+(prompt("ikinci sayı"));//syı olduğu belli olsun diye promptun önüne number veya + yazılır.
// let sonuc=0;
// if(islem=="+"){
//     sonuc=s1+s2;}
//     else if (islem=="-") {
//         sonuc=s1-s2;
//     }
//     else if(islem=="*"){
//         sonuc=s1*s2;
//     }
//     else if(islem=="/"){
//         sonuc=s1/s2;
//     }
//     console.log(sonuc);

//     console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
//     //mesela=3+5=8

    //====TERNARY====
    //örnek
    //const name1=prompt("Adinizi giriniz:");//name yazınca uyarı verdiği için name1 yazıyoruz
    //const age=+prompt("Yasinizi giriniz:"); ilk yol, sadece +'da sıkıntı oluyor, olmasın diye
    //const age=Number(prompt("Yasinizi giriniz:"));
    //const health=prompt("Saglikli misiniz e/h");
    //age >=18
    //?console.log(`${name1} ehliyet alabilir`)
    //:console.log(`${name1} ehliyet alamaz`);
    //const result=
    //age>=18 && health=="e"?`ehliyet alabilir`;`${name1} ehliyet alamaz`;
    
    //emoji ctrl+ı
    //En kolay yol bu alttaki
    //  console.log(
    //      age>=18 && health=="e"
    //      ? `${name1} ehliyet alabilir😄`//evetse ?
    //      :`${name1} ehliyet alamaz😞`//değilse :
    //  );

    // üsttekini alttaki gibi bir değişkene atayıp alert ile yazdırabilriz
    // const result=age > 18 && health=="e"?"Ehliyet alabilir":// SORU İŞARETİ İSE DEMEK
    // "Ehliyet alamaz";
    // console.log(result);//hem consolda
    // alert(result);//hem pop art olarak sonucu çıkarttık

    //Örnek
    // const borç=0;
    // const maaş=3000;
    // console.log(!borç && maaş >2825? "Kredi alabilir 😃" :
    // "Kredi alamaz 😆");
    //!borç = borç false yani 0 demek  ! işareti eğer demek. 
    //0 false 1 true kabul ediliyor. borç yerine 1 yazarsak kredi alamıyor.
    //! kaldırırsak kredi almak için borç ve maaş arasındaki miktara bakıyor.
    //! durursa 0 ve 1 yazmak yeterli borç yerine.


    //?======SWITCH CASE========

    // Girilen sayının onlar ve birler basamağındaki rakamlarını yazı ile yazdıran program.
    // var sayii=prompt("Nolur iki basamaklı bir sayı girin.");
    // var birler=sayii%10;
    // switch(birler){
    //     case 1:
    //         rakamIsmi="Bir";
    //         break;
    //     case 2:
    //         rakamIsmi="İki";
    //         break;
    //     case 3:
    //         rakamIsmi="Üç";
    //         break;
    //     case 4:
    //         rakamIsmi="Dört";
    //         break;    
    //     case 5:
    //         rakamIsmi="Beş";
    //         break; 

    //     case 6:
    //         rakamIsmi="Altı";
    //         break;
    //     case 7:
    //         rakamIsmi="Yedi";
    //         break;
    //     case 8:
    //         rakamIsmi="Sekiz";
    //         break;
    //     case 9:
    //         rakamIsmi="Dokuz";
    //         break;    
    //     case 0:
    //         rakamIsmi="Sıfır";
    //         break;     
    // }
    // console.log(rakamIsmi);


    //=======DÖNGÜLER============

    //======FOR====
    //ASAL SAYI TESPİTİ
    // const number=15;
    // let asal=true;
    // for(let i=2;i<number;i++){
    //     if(number %i==0){
    //         asal=false;
    //         break;
    //     }
    // }
    //const asalMi=asal? "ASAL": "ASAL DEĞİL";
    // console.log(asal ? "ASAL" : "ASAL DEĞİL");

    //Örnek= do-while döngüsü
    // let not;
    // do{
    //     not = prompt("Lütfen do-while için 0-100 arasında bir not giriniz:");
    // }while (not < 0 || not > 100);
    // console.log("Girdiğiniz not 0-100 arasındadır.");

    //Örnek while döngüsü
    // let not2=prompt("Lütfen while için 0-100 arasında bir not giriniz:");
    // while (not2 < 0 || not2 >100){
    //     console.error("Girilen not 0-100 arasında olmalıdır.");
    //     not2 = prompt("0-100 arasında bir not giriniz:");
    // }
    // console.log("Girdiğiniz not 0-100 arasındadır.");


    //örnek: klavyeden end kelimesi girilene kadar not girişi yapan bir programı
    //döngü kurallarına göre yazınız.

    let adi=prompt("başlat yaz enter la");
    let i=1;
    while (adi != "end"){
        //true yerine 1 de yazılabilir,bunlar hep true demk. 0 ise false demektir.
        adi=prompt(i +".kisinin adini giriniz");
        i++;
        console.log(adi);

    }




































    