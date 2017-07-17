// Asigna eventos a los botones de número
var boton
var caja = document.getElementById('display')

boton = document.getElementById('1')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '1'
})

boton = document.getElementById('2')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '2'
})

boton = document.getElementById('3')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '3'
})

boton = document.getElementById('4')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '4'
})

boton = document.getElementById('5')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '5'
})

boton = document.getElementById('6')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '6'
})

boton = document.getElementById('7')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '7'
})

boton = document.getElementById('8')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '8'
})

boton = document.getElementById('9')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '9'
})

boton = document.getElementById('0')
boton.addEventListener('click', function(){
  caja.innerHTML = caja.innerHTML + '0'
})
/*var boton = document.getElementById('1')

var caja = document.getElementById('display')
boton.addEventListener('click', function(){
  caja.innerHTML = "1"
})*/

/*initCalculadora();

initCalculadora(){
  Calculadora.init()
}*/

//Definir calculadora
var Calculadora = {
  // Inicialización de la calculadora
  init: function(){

  },
  sumar: function(){

  },
  restar: function(){

  },
  multiplicar: function(){

  },
  dividir: function(){

  },
  limpiarPantalla: function(){

  }
}
