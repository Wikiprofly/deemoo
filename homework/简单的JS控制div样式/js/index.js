/**
 * Created by Wikiprofly on 2015/4/7.
 */
function changeColor(color){
    var box = document.getElementById("box");
    box.style.backgroundColor = color;
}

function changeShape(width,height){
    var box = document.getElementById("box");
    if(width){
        box.style.width = width + 'px';
    }else{
        box.style.height = height + 'px';
    }
}

function reset(){
    var box = document.getElementById("box");
    box.style.backgroundColor = 'black';
    box.style.width = '50px';
    box.style.height = '50px';
}

function confirm(){
    var cPanel = document.getElementById("cPanel");
    cPanel.style.visibility = 'hidden';
}

function showControlPanel(){
    var cPanel = document.getElementById("cPanel");
    cPanel.style.visibility = "visible";
}