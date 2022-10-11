//ara butonuna tıklandığında çalan telefon çıksın ve zil çalsın
let resim=document.querySelector(".resim");//resme ulaştım
let ring=document.querySelector(".ses");//audio ulaştım
//ara butonuna ulaştım
document.querySelector(".on").onclick=function(){
    resim.src="./img/img.gif";//resim değiştirdim
    ring.play();//sesi çalıştırdım

}
//bağlat butonuna basınca gif gelsin ve ses kesilsin
//bağlat butonunu çağırdık
document.querySelector(".off").onclick=function(){
    resim.src="./img/tel1.gif";//gif değiştirdik
    ring.pause();//sesi susturduk
}
//konuş butonuna basınca yeni gif gelsin
document.querySelector(".speak").onclick=function(){
    resim.src="./img/tel3.gif";
}
//! Bunlar uzun yol istediğimiz yere text yazmak için
//1const sonDiv=document.querySelector(".input-div");
//2const h1=document.createElement("h1");
//3const yazi=document.createTextNode("Programlama Dilleri");
//4h1.appendChild(yazi);
//5sonDiv.after(h1); //input divin sonrasına h1 ekliyoruz.

//!yukarıdakini kısa yolu
//!ekle butonuna basıldığında yeni bir li ekle
const liste=document.querySelector(".liste");//silmede de kullandığımız için bu kodu başa alıyoruz
document.querySelector(".ekle").onclick=function(){
    
    const giris=document.querySelector(".dil");//dil girişi yapılan input a ulaştık
    liste.innerHTML=liste.innerHTML+`<li>${giris.value}</li>`;//listeye inputa girilen değerleri liste olarak ekledik
    giris.value="";//inputa girilen değeri ekleyince inputtan silinmesi için 
}
//!sil butonuna tıklandığında li elemanı silinsin
//sil butonuna ulaştık
document.querySelector(".sil").onclick=function(){
    liste.removeChild(liste.lastElementChild);//listenin çocuklarından listenin son çocuğunu sildik
}
//indexte p class oluşturduk ve programa dillerini yazdık. css de de şekil verdik
const parag=document.querySelector(".forH1");
parag.innerHTML=`<h1>${"Programlama Dilleri"}</h1>`;

//!Klavyeden bir tuşa basıldığında büyüsün küçülsün
document.querySelector(".textbox").onkeyup=function(){
    const check=document.querySelector(".checkbox");
    const text=document.querySelector(".textbox");
    if(check.checked){
        text.value=text.value.toUpperCase();
    }else{
        text.value=text.value.toLowerCase();
    }

}

//!mouse resmin üstüne geldiğinde aslan kükresin
resim.onmouseover=function(){
    resim.src="./img/aslan2.jpg";
}

// ?2. ama uzun yol addEventListener yolu.
// resim.addEventListener("mouseover",function(){
// resim.src="./img/aslan2.jpg";
// })

//!mouse resmin üstünden çekildiğinde diğer aslan gelsin
resim.onmouseout=function(){
    resim.src="./img/aslan1.jpg";
}
 //tuş kodları enter=13  delete=46
 //onkeydown=klavyedeki tuşa basıp elinizi çektiğinizde tuş yazar
 //onkeyup= klavyedeki tuşa basınca yazar
 //enter e basınca ekle delete basınca sil

 document.querySelector(".dil").onkeydown=function(klavye){
    if(klavye.keyCode==13){//enter'ı çağırdık
        document.querySelector(".ekle").onclick();

    }if(klavye.keyCode==46){//delete'i çağırdık
        document.querySelector(".sil").onclick();

    }
 }
 














 