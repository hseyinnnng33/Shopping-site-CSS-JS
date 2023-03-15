'use strict';
const Sepet = document.getElementById("kutu");
const SepetUrun = document.getElementById("result");
const Btn = document.getElementById("urunal");
const BtnSil = document.getElementById("urunsil");
const UrunSayi = document.getElementById("result1");
const UrunSayisi = document.getElementById("result2");
const Ozelliklerbtn = document.getElementById("acilir-kutu");
const Ozellikler = document.getElementById("ozellikler");
const Btnİ = document.getElementById("times");

const navMenu = document.getElementById("bars");
const navUl = document.getElementById("menu");
const navBtnAcik = document.getElementById("acik-menu1");
const navBtnKapali = document.getElementById("times1");
let degeri = false;

navBtnAcik.addEventListener("click", () =>{
    navBtnKapali.style.display = "block";
    navBtnAcik.style.display = "none";
    navUl.style.display = "block";
});

navBtnKapali.addEventListener("click", () =>{
    navBtnAcik.style.display = "block";
    navBtnKapali.style.display = "none";
    navUl.style.display = "none";
});


Ozelliklerbtn.addEventListener("click",  () =>{
    Ozellikler.style.display = "block";
});

Btnİ.addEventListener("click", ()=>{
    Ozellikler.style.display = "none";
})


let urun = 0;
let fiyat = 15.799;

Btn.addEventListener("click", () =>{
    let deger = ++urun;
    let toplam = fiyat*deger;
    if(deger>=0){
    Sepet.style.color = "red";
    SepetUrun.innerHTML = deger;
    UrunSayi.innerHTML = `Sepette olan ürünler <span style="color: blue; font-weight: bold;">SİYAH İPHONE 11 </span> , Adet = ${deger}`;
    UrunSayisi.innerHTML = `Sepet tutarı ${toplam}`;
    }
    BtnSil.style.display = "block"; 
});

BtnSil.addEventListener("click", () =>{
    let deger = --urun;
    let toplam = fiyat * deger;
    Sepet.style.color = "orange";
    if(deger>=0){
    UrunSayi.innerHTML = `Sepette olan ürünler <span style="color: blue; font-weight: bold;">SİYAH İPHONE 11 </span>, Adet = ${deger}`;
    UrunSayisi.innerHTML = `Sepet tutarı ${toplam}`;
    SepetUrun.innerHTML = deger;
    }
    if(deger===0){
        UrunSayisi.innerHTML = "";
        UrunSayi.innerHTML = "";
        SepetUrun.innerHTML = "";    
        BtnSil.style.display = "none"; 
    }
});






