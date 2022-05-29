for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimationAdd(buttonInnerHTML);
        
    });
    document.querySelectorAll("button")[i].addEventListener("keydown",function(e){
        var keypressed=e.key;
        makesound(keypressed);
        buttonAnimationAdd(keypressed);
        
    });
}
function makesound(e) {
    switch (e) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            document.querySelector(".img").setAttribute("src","images/tom1.png");
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            document.querySelector(".img").setAttribute("src","images/tom2.png")
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");  
            audio.play();
            document.querySelector(".img").setAttribute("src","images/tom3.png");
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            document.querySelector(".img").setAttribute("src","images/tom4.png");
            break; 
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            document.querySelector(".img").setAttribute("src","images/snare.png");
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            document.querySelector(".img").setAttribute("src","images/kick.png");
            break;
        case "l":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            document.querySelector(".img").setAttribute("src","images/crash.png");
            break;               
        default:
            break;
    }
}

function buttonAnimationAdd(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
    

}

