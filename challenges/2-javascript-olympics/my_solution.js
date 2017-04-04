 // U3.W7: JavaScript Olympics

// Integrantes parejas: nombre1, nombre2
//Melissa y Nicolás

// 0. Objetos
var melissa = {name: "Melissa", height: 1.60, sport: "dancing"}
var nicolas = {name: "Nicolas", height: 1.93, sport: "rugby"}

function addWin (atletas, event){
  atletas.forEach(function(atleta){
    atleta.win = function(){
      console.log(`${atleta.name} won the ${event}`)
    }
  })
}

addWin([nicolas, melissa], "100 mts")
nicolas.win()
nicolas.name = "fasjdlf"
nicolas.win



// 1. Añadir propiedades a objetos

a1 = {
  name: 'fasd',
  age: 12
}

a2 = {
  name: 'afsdf',
  age: 324
}


var name = 'juan'

// Function Declaration
function name() {

}

// Function Expresssion
var name = function() {
  console.o
}




function addWinToAthletes(athletes, event) {
  athletes.forEach(function(athlete){
    athlete.win = function() {
      console.log(`${this.name} won the ${event}`)
    }
  })
}


addWinToAthletes([a1,a2], 'Tennis')



// 2. Voltea un String

function flip(text){
  var arrText = text.split("");
  arrText.reverse();
  return arrText.join("");
}

console.log(flip("melissa"))
console.log(flip("nicolas"))



// 3. Remueve numeros impares
function returnEvens(array){
  var evens = []
    array.forEach(function(number){
      if(number % 2 === 0){
        evens.push(number)
      }
  })
    return evens
}

var a = returnEvens([1,2,3,4,5,6,7,8,9])
console.log(a)
// 4. Funcion constructora

function Athlete(name, age, sport){
  this.name = name
  this.age = age
  this.sport = sport  
}


var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')

// 5. Reflexion



// 6. Pruebas

<<<<<<< HEAD
// console.log(melissa.name === "Melissa")
// console.log(nicolas.name === "Nicolas")
=======
// 5. Reflexion


/////// Pruebas //////////
var michaelPhelps = new Athlete("Michael Phelps", 29, "swimming")
console.log(michaelPhelps.constructor === Athlete)
console.log((michaelPhelps.name + " " + michaelPhelps.sport + " " + michaelPhelps.age) === 'Michael Phelps swimming 29')
>>>>>>> upstream/master
