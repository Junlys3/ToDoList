var button = document.querySelector(".button-submit")

var input = document.querySelector(".text-input")

var completelist = document.querySelector(".tasks-list")

let lista = []

function arrayclick (){
  lista.push({
   tasks: input.value,
   finish: false
  })

  input.value = ''

  showtasks()
}

function showtasks(){
   let novali = ''

  lista.forEach( (task, index) => {
   novali += `
   <li class="task ${lista[index].finish && "do"}">
       <img src="imagens/Seta-positiva.png"    alt="Seta-positiva" onclick="MudarCor(${index})">
       <p>${task.tasks}</p>
       <img src="imagens/Apagar.png" alt="Apagar" onclick="apagar(${index})">
   </li>`
  
 } )

   completelist.innerHTML = novali

   localStorage.setItem('lista', JSON.stringify(lista))
}

function MudarCor(index){
  lista[index].finish = !lista[index].finish 

  showtasks()
}

function apagar(index){
   lista.splice(index, 1)

   showtasks()
}
function carregartasks(){
   var localstoragetasks = localStorage.getItem('lista')

   lista = JSON.parse(localstoragetasks)

   showtasks()
}

carregartasks()

button.addEventListener('click', arrayclick)

