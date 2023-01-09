
let div;
let textarea;
let element;

window.onload = function () {
  div = document.querySelector('.derecho');
  const elementList = document.getElementsByClassName('derecho');
  div = elementList[0];
  textarea = document.getElementById('txtEncriptado');
  console.log(div);
}
function encriptarTexto() {
  var texto = document.getElementById("txtsinEncriptar").value.toLowerCase();
  if (texto.length > 0) {
    var txtCifrado = texto.replace(/e/igm, 'enter')
    var txtCifrado = txtCifrado.replace(/o/igm, 'ober')
    var txtCifrado = txtCifrado.replace(/i/igm, 'imes')
    var txtCifrado = txtCifrado.replace(/a/igm, 'ai')
    var txtCifrado = txtCifrado.replace(/u/igm, 'ufat')
    document.getElementById("noSeEncontroTexto").style.display = "none";
    txtEncriptado.value = txtCifrado
    cambiarElementosPorResolucion();
    document.getElementById("btnCopiar").style.display = "block";
    document.getElementById("txtEncriptado").style.color = "#0a3871";
    txtEncriptado.readOnly = true;
  } else {
    document.getElementById("txtEncriptado").style.color = "red";
    txtEncriptado.value = "Ingrese el texto que desee encriptar o desencriptar"
  }
}

function cambiarElementosPorResolucion() {
  const mediaQuery1 = window.matchMedia('(min-width: 375px) and (max-width: 768px)');


  if (mediaQuery1.matches) {
    document.getElementById("imgMuneco").style.display = "none";
    txtEncriptado.style.height = "auto"
    // div.style.height = '600px';
  }

  // Segunda condición: resolución menor a 375px
  const mediaQuery2 = window.matchMedia('(max-width: 375px)');
  if (mediaQuery2.matches) {
    document.getElementById("imgMuneco").style.display = "none";
    txtEncriptado.style.height = "auto"
    // div.style.height = '500px';

  }
  // Tercera condición: resolución mayor a 768px
  const mediaQuery3 = window.matchMedia('(min-width: 768px)');
  if (mediaQuery3.matches) {
    // La resolución es mayor a 768px
    txtEncriptado.style.height = "500px"
    document.getElementById("imgMuneco").style.display = "none";

  }
}
function desencriptarTexto() {
  var texto = document.getElementById("txtsinEncriptar").value.toLowerCase();
  if (texto.length > 0) {
    var txtCifrado = texto.replace(/enter/igm, 'e')
    var txtCifrado = txtCifrado.replace(/ober/igm, 'o')
    var txtCifrado = txtCifrado.replace(/imes/igm, 'i')
    var txtCifrado = txtCifrado.replace(/ai/igm, 'a')
    var txtCifrado = txtCifrado.replace(/ufat/igm, 'u')
    document.getElementById("noSeEncontroTexto").style.display = "none";
    txtEncriptado.value = txtCifrado
    cambiarElementosPorResolucion();
    document.getElementById("btnCopiar").style.display = "block";
    document.getElementById("txtEncriptado").style.color = "#0a3871";
    txtEncriptado.readOnly = true;
  } else {
    document.getElementById("txtEncriptado").style.color = "red";
    txtEncriptado.value = "Ingrese el texto que desee encriptar o desencriptar"
  }
}
function copiarTexto() {
  var contenido = document.getElementById("txtEncriptado");
  contenido.select();
  document.execCommand("copy");
  document.getElementById("btnCopiar").style.display = "none";

  const mediaQuery1 = window.matchMedia('(min-width: 375px) and (max-width: 768px)');
  if (mediaQuery1.matches) {
    document.getElementById("imgMuneco").style.display = "none";
  }
  // Segunda condición: resolución menor a 375px
  const mediaQuery2 = window.matchMedia('(max-width: 375px)');
  if (mediaQuery2.matches) {
    document.getElementById("imgMuneco").style.display = "none";
  }
  // Tercera condición: resolución mayor a 768px
  const mediaQuery3 = window.matchMedia('(min-width: 768px)');
  if (mediaQuery3.matches) {
    // La resolución es mayor a 768px    
    div.style.height = "85%";
    document.getElementById("imgMuneco").style.display = "block";

  }



  document.getElementById("noSeEncontroTexto").style.display = "block";
  txtEncriptado.value = "Ingrese el texto que desee encriptar o desencriptar";
  txtEncriptado.style.height = "50px"
  txtEncriptado.readOnly = true;
  document.getElementById("txtEncriptado").blur();
  document.getElementById("txtsinEncriptar").select();
}
function check(e) {
  tecla = (document.all) ? e.keyCode : e.which;
  // Permiter la Tecla de retroceso para borrar.
  if (tecla == 8) {
    return true;
  }
  // Permite la Tecla Enter
  if (tecla == 13) {
    return true;
  }
  // Permite el espacio en blanco
  if (tecla == 32) {
    return true;
  }
  // Asegúrandome que solo se acepten letras minúsculas y números
  if ((tecla < 97 || tecla > 122) && (tecla < 48 || tecla > 57)) {
    return false;
  }
  return true;
}


