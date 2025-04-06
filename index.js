let  display = document.getElementById("inputBox");
let  buttons = document.querySelectorAll("button");
let clickSound = document.getElementById("click-sound")
let buttonsArray = Array.from(buttons);
let string = "";


function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}





buttonsArray.forEach(function(btn){
    
    btn.addEventListener("click",function(event){

        if(event.target.innerHTML == "DEL"){
            playClickSound()
            string = string.substring(0, string.length-1);
            display.value = string;
        }
        else if(event.target.innerHTML == "AC"){
            playClickSound()
            string = ""
            display.value = string;
        }
        else if (event.target.innerHTML == "="){
            playClickSound()
            string = eval(string);
            display.value = string;
        }
        else{
            playClickSound()
        string += event.target.innerHTML;
        display.value = string;
        }
    });
    
    
});

// bnt.addEventListener("click" , sound);

// function sound (){
//     new Audio("click.mp3").play();
// }
