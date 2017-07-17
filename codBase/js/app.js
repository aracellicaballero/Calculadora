var tamanoCaja = 0
var caja = document.getElementById('display')

//Definir calculadora
var Calculadora = {
  // Inicialización de la calculadora
  init: function(){
    this.listenerBotonClick()
  },
  tamanoMaximo: function(){
    // La cantidad de dígitos no debe tomar en cuenta el signo
    if(caja.innerHTML.indexOf('-') == -1){
      tamanoCaja = 8;
    }else {
      tamanoCaja = 9;
    }
    // La cantidad de dígitos no debe tomar en cuenta el punto
    if(caja.innerHTML.indexOf('.') != -1){
      tamanoCaja = tamanoCaja + 1;
    }
  },
  escribirEnPantalla: function(valor){
    this.tamanoMaximo()

    var valorEnPantalla = caja.innerHTML

    if (valorEnPantalla.length == tamanoCaja){return}

    if (valorEnPantalla == '0'){
      caja.innerHTML = valor
    }else{
      caja.innerHTML = valorEnPantalla + valor
    }
      //Al presionar una tecla numérica, se muestre el número correspondiente en la pantalla. Debes verificar si en la pantalla se encuentra sólo el número cero, que no se puedan agregar más números cero. Además debes hacer que si en pantalla está sólo el cero, al presionar otro número diferente, éste debe reemplazar al cero inicial.
      //Al presionar la tecla del punto, lo añada a la derecha del número actual que se muestra en pantalla. Debes verificar si el punto ya está o no en pantalla para no adicionarlo más de una vez.
      //un método que añada el signo negativo al presionar la tecla +/- a un número en pantalla. Si el número sólo es un cero, no se debe agregar el signo, además debes verificar que si el signo menos ya está en pantalla, al presionar la tecla se borre.
      //Realiza una validación para la pantalla, en la que sólo se puedan mostrar 8 dígitos. Si el número digitado, o el resultado de una operación posee un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos.
      //El objeto Calculadora debe implementar las cuatro operaciones matemáticas básicas, de tal manera que al presionar un número y el signo aritmético, la pantalla quede vacía para indicar que la calculadora está en medio de una operación. Posteriormente se muestra el segundo número de la operación en pantalla. Para realizar la operación, debes asignar los métodos necesarios para que al presionar el botón igual, se ejecute el procedimiento correspondiente. Debes realizar métodos que reciban parámetros y retornan valores, por ejemplo:
  },
  listenerBotonClick: function(){
    var self = this

    // Botones de números
    for (var i = 0; i < 10; i++) {
      document.getElementById(i).onclick = function(e){
        self.escribirEnPantalla(this.id)
      }
    }
    // boton ON
    document.getElementById('on').onclick = function(e){
      tamanoCaja = 8
      self.limpiarPantalla()
    }
    // botón signo
    document.getElementById('sign').onclick = function(e){
      // Si el número es 0, no hace nada
      if (caja.innerHTML == '0'){return}

      // determina si ya hay un signo negativo
      if(caja.innerHTML.indexOf('-') == -1){
        caja.innerHTML = '-' + caja.innerHTML     //agrega el signo
      }else {
        caja.innerHTML = caja.innerHTML.slice(1)  //quita el signo
      }
    }
    // botón raíz
    document.getElementById('raiz').onclick = function(e){
      self.tamanoMaximo()
      //Si el número es diferente de 0, muestra la raíz cuadrada del número
      var resultado
      if (caja.innerHTML != '0'){
        resultado = caja.innerHTML = Math.sqrt(caja.innerHTML)
        caja.innerHTML = resultado.toString().substr(0, tamanoCaja)
      }
    }
    // boton punto
    document.getElementById('punto').onclick = function(e){
      // si hay un punto, no hace nada
      if(caja.innerHTML.indexOf('.') == -1){
        caja.innerHTML = caja.innerHTML + '.'
      }
    }
    // boton igual
    document.getElementById('igual').onclick = function(e){
      // Toma el valor del sessionStorage
      if ((sessionStorage.numero1) && (sessionStorage.operacion)){
        switch (sessionStorage.operacion) {
          case 'suma':
            self.sumar()
            break;
          default:

        }
      }
      console.log('igual')
    }
    // botones de operaciones - dividir
    document.getElementById('dividido').onclick = function(){
      console.log('dividir')
    }
    // multiplicar
    document.getElementById('por').onclick = function(){
      console.log('multiplicar')
    }
    // restar
    document.getElementById('menos').onclick = function(){
      console.log('restar')
    }
    // sumar
    document.getElementById('mas').onclick = function(){
      sessionStorage.numero1 = caja.innerHTML;
      sessionStorage.operacion = 'suma'
      // Limpia la pantalla esperando al siguiente elemento
      caja.innerHTML = ''
    }
  },
  sumar: function(){
    caja.innerHTML = Number(sessionStorage.numero1) + Number(caja.innerHTML)
    console.log('sumar')
  },
  restar: function(){
    console.log('restar')
  },
  multiplicar: function(){
    console.log('multiplicar')
  },
  dividir: function(){
    console.log('dividir')
  },
  limpiarPantalla: function(){
    /*Crea un método que al presionar el botón ON/C se borren los números
    que estén en pantalla y se muestre sólo el número cero.*/
    caja.innerHTML = '0'
  },
  guardarValor: function(valor){
    // Guarda en localStorage el primer valor con el que se va a realizar la operación
    localStorage.setItem('valor', valor)
  }
}

initCalculadora();

function initCalculadora(){
  Calculadora.init()
}
