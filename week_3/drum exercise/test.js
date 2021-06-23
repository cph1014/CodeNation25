//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);
 buttonAnimation(buttonInnerHTML);
});
}

//Detecting Image Press
var numberOfDrumImage = document.querySelectorAll(".img").length;

for (var j = 0; j<numberOfDrumImage; j++) {

    document.querySelectorAll(".img")[j].addEventListener("click", function (){

        var imgInnerHTML = this.innerHTML;

        makeSound(imgInnerHTML);
        imgAnimation(imgInnerHTML);
    });
    }

//Detecting keyboard Press
document.addEventListener("keypress",function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key){

switch (key) {
  case "a":
    var boom = new Audio('sounds/boom.wav');
    boom.play();
  break;

  case "s":
  var clap = new Audio('sounds/clap.wav');
  clap.play();
  break;

  case "d":
  var hihat = new Audio('sounds/hihat.wav');
  hihat.play();

  break;
  case "f":
  var kick = new Audio('sounds/kick.wav');
  kick.play();

  break;
  case "g":
  var openhat = new Audio('sounds/openhat.wav');
  openhat.play();

  break;
  case "h":
  var ride = new Audio('sounds/ride.wav');
  ride.play();

  break;
  case "j":
  var snare = new Audio('sounds/snare.wav');
  snare.play();
  break;

  case "k":
    var tink = new Audio('sounds/tink.wav');
    tink.play();
    break;

  case "l":
    var tom = new Audio('sounds/tom.wav');
    tom.play();
    break;


  default: console.log();

}

}

function buttonAnimation(currentKey){
var activeButton = document.querySelector("." + currentKey );

activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}