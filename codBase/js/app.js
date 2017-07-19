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

    // Si lo que hay en la pantalla ya ocupa el máximo tamaño, no hace nada
    if (valorEnPantalla.length == tamanoCaja){return}

    // Si el valor en pantalla es 0, lo reemplaza por el nuevo valor.
    // Si el valor en pantalla no es 0, concatena el valor al existente.
    if ((valorEnPantalla == '0') || (valorEnPantalla == 'ERROR')){
      caja.innerHTML = valor.toString().substr(0, tamanoCaja)
    }else{
      caja.innerHTML = (valorEnPantalla + valor).toString().substr(0, tamanoCaja)
    }
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
      if ((caja.innerHTML > '0')){
        resultado = caja.innerHTML = Math.sqrt(caja.innerHTML)
        caja.innerHTML = resultado.toString().substr(0, tamanoCaja)
      }else{
        caja.innerHTML = 'ERROR'
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
          case 'mas':
            self.sumar()
            break;
          case 'menos':
            self.restar()
            break;
          case 'por':
            self.multiplicar()
            break;
          case 'dividido':
            self.dividir()
            break;
          default:
            break;
        }
      }
    }
    // botones de operaciones - dividir
    document.getElementById('dividido').onclick = function(){
      self.guardarValor (caja.innerHTML, this.id)
      caja.innerHTML = ''
    }
    // multiplicar
    document.getElementById('por').onclick = function(){
      self.guardarValor (caja.innerHTML, this.id)
      caja.innerHTML = ''
    }
    // restar
    document.getElementById('menos').onclick = function(){
      self.guardarValor (caja.innerHTML, this.id)
      caja.innerHTML = ''
    }
    // sumar
    document.getElementById('mas').onclick = function(){
      self.guardarValor (caja.innerHTML, this.id)
      caja.innerHTML = ''
    }
  },
  sumar: function(){
    var numero2 = caja.innerHTML
    caja.innerHTML = ''
    this.escribirEnPantalla(Number(sessionStorage.numero1) + Number(numero2))
  },
  restar: function(){
    var numero2 = caja.innerHTML
    caja.innerHTML = ''
    this.escribirEnPantalla(Number(sessionStorage.numero1) - Number(numero2))
  },
  multiplicar: function(){
    var numero2 = caja.innerHTML
    caja.innerHTML = ''
    this.escribirEnPantalla(Number(sessionStorage.numero1) * Number(numero2))
  },
  dividir: function(){
    var numero2 = caja.innerHTML
    caja.innerHTML = ''
    if (numero2 == '0'){
      // ¿Debería mostrar error? No hace nada. No puede dividir por 0
      caja.innerHTML = 'ERROR'
    }else{
      this.escribirEnPantalla(Number(sessionStorage.numero1) / Number(numero2))
    }
  },
  limpiarPantalla: function(){
    /*Método que al presionar el botón ON/C muestra sólo el número cero.*/
    caja.innerHTML = '0'
  },
  guardarValor: function(v, o){
    // Guarda en localStorage el primer valor con el que se va a realizar la operación
    sessionStorage.numero1 = v;
    sessionStorage.operacion = o;
  }
}

Calculadora.init()
