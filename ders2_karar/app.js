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
    const name1=prompt("Adinizi giriniz:");//name yazınca uyarı verdiği için name1 yazıyoruz
    //const age=+prompt("Yasinizi giriniz:"); ilk yol, sadece +'da sıkıntı oluyor, olmasın diye
    const age=Number(prompt("Yasinizi giriniz:"));
    const health=prompt("Saglikli misiniz e/h");
    //age >=18
    //?console.log(`${name1} ehliyet alabilir`)
    //:console.log(`${name1} ehliyet alamaz`);
    //const result=
    //age>=18 && health=="e"?`ehliyet alabilir`;`${name1} ehliyet alamaz`;
    
    //emoji ctrl+ı
    //En kolay yol bu alttaki
    // console.log(
    //     age>=18 && health=="e"
    //     ? `${name1} ehliyet alabilir😄`//evetse ?
    //     :`${name1} ehliyet alamaz😞`//değilse :
    // );

    // üsttekini alttaki gibi bir değişkene atayıp alert ile yazdırabilriz
    // const result=age > 18 && health=="e"?"Ehliyet alabilir":
    // "Ehliyet alamaz";
    // console.log(result);//hem consolda
    // alert(result);//hem pop art olarak sonucu çıkarttık

    //Örnek
    const borç=0;



    