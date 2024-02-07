var Judadorc1 = Math.floor(Math.random() * 11) + 1
var Jugadorc2 = Math.floor(Math.random() * 11) + 1
var Jugador = Judadorc1 + Jugadorc2

var Computadorac1 = Math.floor(Math.random() * 11) + 1
var Computadorac2 = Math.floor(Math.random() * 11) + 1
var Computadora = Computadorac1 + Computadorac2

alert ("Carta Jugador 1: " + 
Judadorc1 )  

alert("Carta Jugador 2: " + 
Jugadorc2) 

alert( "Total Cartas Jugador: " + 
Jugador)

console.log((" Carta Computadora 1: " + 
Computadorac1))

console.log((" Carta Computadora 2: " + 
Computadorac2)) 

console.log((" Total Cartas Computadora: " + 
Computadora))

var Deseac = "si"

while(Deseac === "si" && Jugador < 21){
    Deseac = prompt(" Â¿Desea una Carta? ")

    if(Deseac === "si"){
        var CartaExtra = Math.floor(Math.random() * 11) + 1

        Jugador = Jugador + CartaExtra

        alert("Su carta nueva es: " +
        CartaExtra)
        alert("Su nuevo total es: " + 
        Jugador)
    }
}

if(Jugador > 21){
    alert("Game Over")
    alert("Judador: " + 
    Jugador) 
    alert("Computadora: " + 
    Computadora)
}

else if( Jugador > Computadora) {
    alert("You Win")
    alert("Judador: " + 
    Jugador) 
    alert("Computadora: " + 
    Computadora)
}
else if( Jugador === Computadora) {
    alert("Ties")
    alert("Judador: " + 
    Jugador) 
    alert("Computadora: " + 
    Computadora)
}
else {
    alert("Game Over")
    alert("Judador: " + 
    Jugador) 
    alert("Computadora: " + 
    Computadora)
}