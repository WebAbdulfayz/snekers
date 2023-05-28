const numberElement = document.getElementById("number");

function decrement() {
  let number = parseInt(numberElement.innerText);
  if (number > 0) {
    number--;
  }
  numberElement.innerText = number;
}

function increment() {
  let number = parseInt(numberElement.innerText);
  number++;
  numberElement.innerText = number;
}

