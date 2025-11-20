//#1
let secret = document.getElementById('secretText991');
secret.style.visibility = 'visible';
//#2
let count = 0;
document.getElementById('weirdButtonX').addEventListener('click', function(){
   let x = document.getElementsByClassName('colorPatch-z9');
   
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
    count++;
    document.getElementById('weirdButtonX').innerText = count;
})

//#3
let clicked = false;
let box = document.getElementById('box7');
box.onmouseenter = function(){
    box.style.borderRadius = '100px';
}
box.onmouseleave = function(){
    box.style.borderRadius = '0px';
}
box.ondblclick = function() {
    if(clicked === false){
        box.style.height = '200px';
        box.style.width = '200px';
        clicked = true;
    }else{
        box.style.height = '100px';
        box.style.width = '100px';
        clicked = false;
    }
}

//#4
let input = document.getElementById('decoderInput');
let output = document.getElementById('decodedOutput');

input.addEventListener('input', function(){
    let text = input.value;
    if(text === 'x'){
        output.innerText = "Forbidden letter detected.";
    }else{
        output.innerHTML = text;
    }
})

//#5
let list = document.getElementById('mysteryList');

list.addEventListener('click', function(i){
    const clicked = i.target;
    clicked.style.color = 'blue'
})


//%6
let title = document.getElementById('glitchTitle');
setTimeout(() => {
    title.innerText = 'DOM Restored!'
    title.style.color = 'blue'
    title.style.fontSize = "40px";
}, 3000);