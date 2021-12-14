var leftColor = document.querySelector("#leftColor");
var rightColor = document.querySelector("#rightColor");
var body = document.getElementsByTagName("body")[0];
var p = document.querySelector("p");



var colorGradient = function(){
    var leftCol = leftColor.value;
    var rightCol = rightColor.value;

    body.style.backgroundImage = "linear-gradient(to right, "
                                    +  leftCol
                                    + ", " + rightCol
                                    +")";
    console.log(leftCol);
    if (leftCol === "#ff0000"){
        leftCol = "Redd";
    }else if(leftCol === "#0000ff"){
        leftCol = "Blue";
    }else if(leftCol === "#00ff00"){
        leftCol = "Green";
    }
    p.textContent = leftCol + " : " + rightCol;
}
colorGradient();

leftColor.addEventListener("input", colorGradient);
rightColor.addEventListener("input", colorGradient); 