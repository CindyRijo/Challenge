

//e----enter
//o---ober
//i---imes
//a --- ai
//u---ufat


function encriptar(){
	var texto = document.getElementById("inputText").value.toLowerCase();
	
	var txtEncriptado = texto.replace(/e/igm, "enter");
	var txtEncriptado = txtEncriptado.replace(/o/igm, "ober");
	var txtEncriptado = txtEncriptado.replace(/i/igm, "imes");
	var txtEncriptado = txtEncriptado.replace(/a/igm, "ai");
	var txtEncriptado = txtEncriptado.replace(/u/igm, "ufat");

	document.getElementById("imgLooking").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("textareaTexto").innerHTML = txtEncriptado;
	document.getElementById("copy").style.display = "show";	
	document.getElementById("copy").style.display = "inherit";	
}

function desencriptar(){
	var texto= document.getElementById("inputText").value.toLowerCase();


	var txtEncriptado= texto.replace(/enter/igm, "e");
	var txtEncriptado= txtEncriptado.replace(/ober/igm, "o");
	var txtEncriptado= txtEncriptado.replace(/imes/igm, "i");
	var txtEncriptado= txtEncriptado.replace(/ai/igm, "a");
	var txtEncriptado= txtEncriptado.replace(/ufat/igm, "u");

	document.getElementById("imgLooking").style.display = "none";
	document.getElementById("texto").style.display = "none";
	document.getElementById("textareaTexto").innerHTML = txtEncriptado;
	document.getElementById("copy").style.display = "show";	
	document.getElementById("copy").style.display = "inherit";
	
}


 function copiar(){
 	var contenido = document.querySelector("#textareaTexto");
 	contenido.select();
 	document.execCommand("copy");
 	alert("Se copió");
}
 