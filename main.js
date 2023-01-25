// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;


//Eventos
btnTry.addEventListener('click', handleClick)
btnReset.addEventListener('click',handleResetClick)


//Funções
function handleClick(event) {
  event.preventDefault() //Não fazer o que é de origem.
  const inputNumber = document.querySelector("#inputNumber")
  
if(Number(inputNumber.value) == randomNumber){
  toggleScreen()
  screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas.`
}
inputNumber.value = ""
xAttempts++
}

function handleResetClick(){
  toggleScreen()
  xAttempts = 1
}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}