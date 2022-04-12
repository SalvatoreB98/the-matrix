import {chars} from './chars.js';

//VARIABLES 
var bug;
var circle;
var myEvent;
var intervalAsci;
var width;
//ONLOAD
window.addEventListener("load",()=>{
    width = window.innerWidth;
    document.getElementById("asci-container").style.fontSize = "calc(100vw / 60) "
    var asciString = ""
    for (var i = 0; i<300; i++) {
        for (var j = 0; j < chars.length; j++){
            asciString = asciString.concat(chars[j]);
        }
           
    }
    asciString = asciString.concat('<i class="fa fa-bug" aria-hidden="true"></i>');
    intervalAsci = setInterval(()=>{
        let toPut = asciString[0];
        if(toPut == "0" || toPut == "1") {
            asciString = asciString.slice(1);
            if(getRandom(5) == getRandom(5)){
                toPut = getRandom(2);
            }  
            asciString = asciString.concat(toPut);
            document.getElementById("asci-container").innerHTML = asciString;
        }
    },75)
    setTimeout(()=>{
        window.addEventListener('mousemove', circleFollow);
    },250);
});

window.addEventListener("bugfound", () => nextStep());

//EVENT LISTENER FUNCTIONS\
var circleFollow = (e) =>{
    var x = e.pageX;
    var y = e.pageY;
    circle = document.getElementById("circle")
    circle.style.left = x + "px"; ;
    circle.style.top = y + "px";
    bug =  document.querySelector("i")
    if(checkNearBug(e)){
        console.log("FOUND!");
        window.removeEventListener("mousemove",circleFollow);
        const bugFound = new Event('bugfound',{bubbles:true,cancelable: true,composed:true})
        dispatchEvent(bugFound);
    }
}

//FUNCTIONS
function checkNearBug(e) {
    var range = width / 13;
    return bug.getBoundingClientRect().x >= e.pageX - range && 
    bug.getBoundingClientRect().x <=  e.pageX + range &&
    bug.getBoundingClientRect().y >= e.pageY - range &&
    bug.getBoundingClientRect().y <= e.pageY +range;     
}
function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function nextStep() {
    clearInterval(intervalAsci);
    document.querySelector("body").classList.add("after-found");
    document.getElementById("circle").classList.add("opacity-0");
}
