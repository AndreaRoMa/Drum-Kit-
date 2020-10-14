var randomNumber1 = Math.floor(Math.random() * (6) + 1);
var newimagerandom = ("images/dice" + randomNumber1 + ".png");
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", newimagerandom);

var randomNumber2 = Math.floor(Math.random() * (6) + 1);
var newimagerandom2 = ("images/dice" + randomNumber2 + ".png");
var image2 = document.querySelectorAll("img")[1].setAttribute("src", newimagerandom2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🚩 Play 1 wins ! "
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = " Play 2 wins ! 🚩 ";
} else
  document.querySelector("h1").innerHTML = " Draw !!";
