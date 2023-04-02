let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rabbit.png'){
        myImage.setAttribute('src', 'images/color-rabbit.png')
    } else {
        myImage.setAttribute('src', 'images/rabbit.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "兔年快乐, " + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storeName = localStorage.getItem('name');
    myHeading.textContent = "兔年快乐, " + storeName;
}

myButton.onclick = function(){
    setUserName();
}