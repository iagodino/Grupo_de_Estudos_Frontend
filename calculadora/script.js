
let count = 0
function changeColor() {
    const numbersList = document.querySelectorAll('.numbers, .operation');

    numbersList.forEach(function (numberItem) {
        numberItem.style.color = count % 3 === 0 ? "green" : count % 3 === 1 ? "blue" : "red";
    });
    count++;
}

function addNumber() {
    console.log("aaa")
}

const myText = document.querySelector('.operation');
const values = [];
let currentValue = "";
let selectedOperator = null;

function updateScreen(value) {
    myText.textContent = value;
}

function addCurrentValueToVector() {
    if (currentValue !== "") {
        values.push(Number(currentValue.replace(",", ".")));
        currentValue = "";
    }
}

const btn = document.querySelectorAll('.base .button');

btn.forEach(element => {
    element.addEventListener('click', function (e) {
        const value = e.currentTarget.textContent.trim();

        if (/^\d$/.test(value) || value === ",") {
            currentValue += value === "," ? "." : value;
            updateScreen(currentValue);
            return;
        }

        if (value === "+" || value === "-" || value === "*" || value === "/") {
            addCurrentValueToVector();
            selectedOperator = value;
            updateScreen(selectedOperator);
            return;
        }

        if (value === "=") {
            addCurrentValueToVector();
            console.log(values.join(selectedOperator));
            let result = eval(values.join(selectedOperator));
            
            values.length = 0;
            values.push(result);
            updateScreen(result);
            return;
        }

        if (value === "+/-") {
            let aux = ["-"];
            aux.push(currentValue);
            values.length = 0;
            values.push(aux.join("").replace(",", ""));
            console.log(aux);
            updateScreen(aux.join("").replace(",", ""));
        }
            
        value == "C" ? (values.length = 0, currentValue = "", updateScreen("")) : value == "CE" ? (currentValue = "", updateScreen("")) : null;
        
    });
});