import {chars} from './chars.js';

window.addEventListener("load",()=>{
    var asciHTMLelement = document.getElementById("asci-container")
    var img = document.getElementById('my-image');
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
    var myCanvas = canvas.getContext('2d');
    var asciString = ""
        for (var i = 0; i<img.width; i++) {
            asciString = asciString.concat("<br>")
            for (var j = 0; j < img.height; j++){
                var pixelData = myCanvas.getImageData(j,i,1,1).data;
                if (pixelData[0]<100 && pixelData[1]<100 && pixelData[2]<100) {
                    asciString = asciString.concat("0")
                } else {
                    asciString = asciString.concat("1")
                }
               
                asciHTMLelement.innerHTML = asciString;
            }
        }
})

function getRandom(max) {
    return Math.floor(Math.random() * max);
  }