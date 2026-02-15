var texto = "Desde que llegaste a mi vida, todo es más bonito. Gracias por existir, gracias por hacerme feliz. Te quiero mucho ❤️";

var i = 0;

function escribir(){

if(i < texto.length){

document.getElementById("texto").innerHTML += texto.charAt(i);

i++;

setTimeout(escribir, 50);

}

}

function abrirCarta(){

document.getElementById("carta").style.display = "block";

document.getElementById("boton").style.display = "none";

document.getElementById("musica").play();

escribir();

}
