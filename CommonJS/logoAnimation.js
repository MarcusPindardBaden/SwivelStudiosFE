let imageLocator = document.getElementById('logoAnimation');
let imageArray = ["images/blueLogo.png", "images/yellowLogo.png", "images/greenLogo.png", "images/pinkLogo.png"];
let index = 0;
function logoImageChange(){
    imageLocator.src = imageArray[index];
    index = (index+1) % imageArray.length;
}

setInterval(logoImageChange, 500);

