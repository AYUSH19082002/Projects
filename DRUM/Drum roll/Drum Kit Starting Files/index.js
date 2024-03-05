var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick() {
    var sound = this.innerHTML;
    makeSound(sound);
    animateButton(sound);
}


document.addEventListener("keydown",function(event){
    var sound=event.key;
    makeSound(sound);
    animateButton(sound);
    console.log(sound);
})
function makeSound(key)
{
    var sound=key;
    if (sound == "w") {
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    }
    else if (sound == "a") {
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
    }
    else if (sound == "s") {
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
    }
    else if (sound == "d") {
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
    }
    else if (sound == "j") {
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
    }
    else if (sound == "k") {
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
    }
    else if (sound == "l") {
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
    }
}

function animateButton(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}