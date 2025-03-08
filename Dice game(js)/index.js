var randomNumber=Math.floor(Math.random()*6)+1;
var randomImage="dice"+randomNumber+".png";
var randomImageSource=randomImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImageSource2=randomImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}

else if(randomNumber<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}