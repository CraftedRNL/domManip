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
let colors = ["highlight-l", "highlightI"];
let turn = 1;
list.addEventListener('click', function(i){
    let arr = list.children;
    console.log(arr)
    var li = list.querySelectorAll("li");
    console.log (Array.prototype.indexOf.call(li, i.target)); // got from a website 
    let yellow = Array.prototype.indexOf.call(li, i.target);
    

    arr[yellow].classList.add("highlight1")

    // for(let i = 0; i < arr.length; i++){
    //     if(i!==yellow){
    //         arr[i].classList.add(colors[i])
    //     }
    // }

    for(let i = 0; i < arr.length; i++){
        if(i!==yellow){
            arr[i].classList.add(colors[i])
        }
       
    }
  
    
})


//%6
let title = document.getElementById('glitchTitle');
setTimeout(() => {
    title.innerText = 'DOM Restored!'
    title.style.color = 'blue'
    title.style.fontSize = "40px";
}, 3000);