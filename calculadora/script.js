const numbers = document.querySelector(".numbers");

function changeColor(){
    numbers.style.color = "green";
}

function addNumber() {
    console.log("aaa")
    
}

const btn = document.querySelectorAll('.button');
const myText = document.querySelector('.operation');

console.log("btn: ", btn)
btn.forEach(element => {
element.addEventListener('click', function(e){
  const myInsertText = e.target.innerHTML;
myText.innerHTML = myInsertText;
       
});
});