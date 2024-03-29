let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/d000baa1cd11728bd45192c4c0fcc3cec2fd2cd3.jpg') {
      myImage.setAttribute('src', 'images/d000baa1cd11728bd45192c4c0fcc3cec2fd2cd3 - 2.jpg');
    } else {
      myImage.setAttribute('src', 'images/d000baa1cd11728bd45192c4c0fcc3cec2fd2cd3.jpg');
    }
}

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'B站欢迎你，' + name + '！';
}

function setUserName() {
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;