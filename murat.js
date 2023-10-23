


const isim=prompt("isminiz nedir ?")
var spanElement = document.querySelector("#myName");

spanElement.innerHTML=isim

function tarihVeSaatF(){
    var CurrentDate =new Date();
    var Tarih=CurrentDate.toLocaleString();
    const Clock=document.querySelector("#myClock");

    Clock.innerHTML=Tarih;


}

setInterval(tarihVeSaatF, 1000);



