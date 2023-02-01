var prev=document.getElementById("prev");
var next=document.getElementById("next");
var SLimage=document.getElementById("SLimage")



prev.addEventListener("click",onShowPrevBut);
next.addEventListener('click',onShowNextBut);

var images=["https://resizer.mail.ru/p/76a94ea6-f521-5c64-8638-9b7b477058d4/AQAB9WqMmLpMjo9Wn4O3KM2RcOewqpp4bshrXITGjWeWB2YqhiUECzzIVqYckAY6pd6uxa7vtq8WH7ISFOIVx8y7MLE.jpg","https://i.pinimg.com/236x/e2/b3/de/e2b3dee89284df30e0a52663f1f8540a.jpg"];


var currentIndex=0;
SLimage.src=images[currentIndex];
function onShowPrevBut(){
    currentIndex--;
    SLimage.src=images[currentIndex];
    if(currentIndex===0){
        prev.disabled=true;
        next.disabled=false;
    }
}
function onShowNextBut(){
    currentIndex++;
    SLimage.src=images[currentIndex];
    if(currentIndex===(images.length-1))
    {next.disabled=true;
    prev.disabled=false;

    }
}