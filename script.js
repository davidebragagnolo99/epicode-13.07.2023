const tabellone = document.getElementById("tabellone_tombola");
const button = document.querySelector("button");

for (let i = 0; i < 76; i++) {
  const tabDiv = document.createElement("div");
  tabDiv.classList.add("tab-Div");
  const divH3 = document.createElement("h3");
  divH3.innerText = i + 1;
  tabellone.appendChild(tabDiv);
  tabDiv.appendChild(divH3);
}

const randomNumber = () => {
  let numeroEstratto = Math.ceil(Math.random() * 76);
  console.log(numeroEstratto);

  let numbers = document.querySelectorAll(".tab-Div h3");
  let divs = document.querySelectorAll(".tab-Div");
  let numeriEstratti = [];
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j].innerText === numeroEstratto.toString()) {
      divs[j].classList.add("selected");
    }
  }
};
button.onclick = randomNumber;
