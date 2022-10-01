//=============================
//!========== GET ELEMENT BY ID========

const paragraf = document.getElementById("para").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
//paragraf.height="29px";paragrafın renginin büyüklüğünü ayaralar.javascrpt çok kolay yazısının arka planı
paragraf.fontSize = "40px";


const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.color = "red";
buton.style.fontSize = "18px";
buton.textContent = "ARA";//textcontent tagların içeriğindeki yazıyı değiştirmek için kullanılır.query selectorde de text contenti kullanıyoruz.
//buton.innerHTML=`<li>trt</li>`;innerhtml ile liste yapılıyor.

//!============GETELEMENT BY TAGNAME//Bu kullanım tercih edilmiyor,class adı =tag adı
const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[0].style.height = "300px";
resim[1].style.border = "3px solid red";


//!============GET ELEMENT BY CLASSNAME/class adıyşla çağırma ama getelementbytagname gibi dizi şeklinde algılıyor
const baslık = document.getElementsByClassName("H1");
baslık[0].style.textAlign = "center";

//!===============QUERY SELECTOR============
//?       EN ÇOK KULLANILAN ÇAĞIRMA YOLU
document.querySelector(".arama").textContent = "DOM SELECTOR KAVRAMI 😄"//class olunca . kullanıyoruz

document.querySelector("#govde").style.backgroundImage ="linear-gradient(green,blue,pink)";//id olunca # kullanıyoruz.

//!=====EVENTS (OLAYLAR)============
//(onmouseover,onmouseout=fare üstüne gelince ve fareden ayrılınca)
const h = document.querySelector(".h1");

//let a = h.color;eski renge dönme kodu
h.onmouseover = function () {
    h.style.color = "red";
    h.style.backgroundColor = "white";
};
h.onmouseout = function () {
    h.style.color = "pink";
    h.style.backgroundColor = "yellow";
};
//! 1.resme tıkladığımızda img ler yer değiştirsin

document.querySelector(".bir").onclick = function () {
    document.querySelector(".bir").src = "./img/logo2.png";
    document.querySelector(".iki").src = "./img/logo1.png";
}





