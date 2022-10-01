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
//ekle butonuna basıldığında yeni bir li ekle
const liste=document.querySelector(".liste");//silmede de kullandığımız için bu kodu başa alıyoruz
document.querySelector(".ekle").onclick=function(){
    
    const giris=document.querySelector(".dil");
    liste.innerHTML=liste.innerHTML+`<li>${giris.value}</li>`;
    giris.value="";
}
//sil butonuna tıklandığında li elemanı silinsin
document.querySelector(".sil").onclick=function(){
    liste.removeChild(liste.lastChild);
}