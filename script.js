import {chars} from './chars.js';

window.addEventListener("load",()=>{
    var asciString = ""
        for (var i = 0; i<500; i++) {
            for (var j = 0; j < chars.length; j++){
                asciString = asciString.concat(chars[j]);
            }
        }
    setInterval(()=>{
        let toPut = asciString[0];
        asciString = asciString.slice(1);
        if(getRandom(5) == getRandom(5)){
            toPut = getRandom(2);
        }  
        asciString = asciString.concat(toPut);
        document.getElementById("asci-container").style.color = "#10c500"; 
        document.getElementById("asci-container").innerHTML = asciString;
    },75)
})

function getRandom(max) {
    return Math.floor(Math.random() * max);
  }