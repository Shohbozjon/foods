var elFoods = document.querySelector(".foods");
var elBtnRec = document.querySelector(".btn-rec");
var elBanana = document.querySelector(".banana");
var elFish = document.querySelector(".fish");
var elHotdog = document.querySelector(".hamburger");
var elIcecream = document.querySelector(".ice-cream");
var elCola = document.querySelector(".cola");


var record = new webkitSpeechRecognition();

record.lang = "en-US"

record.onend = function(){
  console.log("===== Aloqa tugadi =====");
}

record.onerror = function(){
  console.log("===== Xatolik yuz berdi =====");
}


record.onresult = function(evt){

  var command = evt["results"][0][0]["transcript"];

  if (command == "banana"){
    elBanana.classList.add("banana-active");
  }

  if (command == "fish"){
    elFish.classList.add("fish-active");
  }

  if (command == "hamburger"){
    elHotdog.classList.add("hamburger__active");
  }

  if (command == "ice cream"){
    elIcecream.classList.add("ice-cream__active");
  }

  if (command == "cola"){
    elCola.classList.add("cola-active");
  }
}


elBtnRec.addEventListener("click", function(){
  console.log("===== Aloqa boshlandi =====");
  record.start();
})