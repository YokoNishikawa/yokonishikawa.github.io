const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/cherry-blossoms-2289635_1280.jpg') {
    myImage.setAttribute('src','images/tulip-flower-white-flower-spring.jpg');
  } else {
    myImage.setAttribute('src','images/cherry-blossoms-2289635_1280.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
    }
  }
  

if (!localStorage.getItem('name')) {
setUserName();
} else {
const storedName = localStorage.getItem('name');
myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}
  
myButton.onclick = () => {
    setUserName();
  }
  