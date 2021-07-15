(function(){

    var formulario = document.formulario_registro,
        elementos = formulario.elements;

    /* -----------FUNCIONES----------- */

    //Validar los Inputs

    var validarInputs = function(){

        for(var i = 0; i < elementos.length; i++){// con este ciclo for recorremos todos los elementos del formulario
            if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {//Aqui indicamos que si los elementos recorridos en el ciclo son de tipo texto, email o password ejecutamos lo siguiente
                if (elementos[i].value == 0) { // Aqui decimos que si el valor del input recorrido en ese momento es igual a 0, es decir no tiene ningun valor colocado por el usuario ralizamos lo siguiente 
                    console.log("el campo " + elementos[i].name + " esta incompleto");// indicamos en la consola el nombre del input que no fue llenado 
                    elementos[i].className = elementos[i].className + " error";// Agregamos la clase error a los input incorrectos 
                    return false;
                }else {
                    elementos[i].className = elementos[i].className.replace(" error", "")// Quitamos la calse input una vez este haya sido completao 
                }       
            }

        }

        if (elementos.pass.value !== elementos.pass2.value){ // aqui decimos que queremos comprobar los valores de pass y pass 2 y si son diferentes entonces es incorrecto y hay que colocarlo como error 
            elementos.pass.value = "";// con esto reseteamos el valor de los input 
            elementos.pass2.value = "";
            elementos.pass.className = elementos.pass.className + " error"; //aqui agregamos la clase de error a los input password
            elementos.pass2.className = elementos.pass2.className + " error";

        }else { //con esto quitamos la clase error de los input password si estos tiene contraseñas iguales
            elementos.pass.className = elementos.pass.className.replace  (" error", ""); 
            elementos.pass2.className = elementos.pass2.className.replace  (" error", "");
        }

        return true;
    };

    //Validar los Radio Buttoms
    var validarRadios = function () {
        var opciones = document.getElementsByName("sexo"),//Aqui obtenemos los elementos por su nombre
            resultado = false;
          
          for (var i  = 0; i < elementos.length; i ++) { 
              if (elementos[i].type == "radio" && elementos[i].name == "sexo" ) {
                  for (var o = 0; o < opciones.length ; o++) {// Con este ciclo recorremos todos los radios buttoms que tengamos en nuestro codigo 
                      if (opciones[o].checked) {//Con esto revisamos si alguno de estos elementos esta marcado
                          resultado = true;
                          break;// si uno de los radio buttoms estan marcados con esto rompemos el ciclo para que deje de ejecutarse 
                      }           
                      
                  }
                  if (resultado == false) {
                      elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                      console.log("El campo sexo esta incompleto");
                      return false;
  
                  } else {
                      elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                      return true;
                  }
              }
          }
  
    }; 

    var validarCheckboxs = function () {
        var opciones = document.getElementsByName("terminos"),//Aqui obtenemos los elementos por su nombre
            resultado = false;
          
          for (var i  = 0; i < elementos.length; i ++) { 
              if (elementos[i].type == "checkbox" && elementos[i].name == "terminos" ) {
                  for (var o = 0; o < opciones.length; o++) {// Con este ciclo recorremos todos los radios buttoms que tengamos en nuestro codigo 
                      if (opciones[o].checked) {//Con esto revisamos si alguno de estos elementos esta marcado
                          resultado = true;
                          break;// si uno de los radio buttoms estan marcados con esto rompemos el ciclo para que deje de ejecutarse 
                      }           
                      
                  }
                  if (resultado == false) {
                      elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                      console.log("Acepta los terminos y condiciones");
                      return false;
  
                  } else {
                      elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
                      return true;
                  }
              }
          }
  
    }; 

    //Esta funcion se activa al puyar el boton de enviar
    var enviar = function(e) {
        if (!validarInputs()) {
            console.log("falto validar los Inputs");
            e.preventDefault();
            
        }else if (!validarRadios()){
            console.log("falto validar los Radio Buttoms");
            e.preventDefault();

        }else if (!validarCheckboxs()){
            console.log("falto validar los Checkboxs");
            e.preventDefault();

        }else {
            console.log("Enviado correctamente")
            e.preventDefault();
        }
        
    }

    //funciones blur y focus
    var focusInput = function () {
        
        //En este caso el parentElement es el input-group en HTML y los children son el input y el label 
        this.parentElement.children[1].className = "label active"; //Aqui agregamos la clase active al momento de hacer focus en el input 
        this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");//Aqui quitamos la clase error 
        
    }

    var blurInput = function () {

        if (this.value <= 0) {

            this.parentElement.children[1].className = "label";//Aqui quitamos la clase active
            this.parentElement.children[0].className = this.parentElement.children[0].className + "error";//Con esto colocamos la clase error si el valor del input es 0

        } 
    }

    /* -----------EVENTOS----------- */

    //Con esto agregamos el evento de enviar al boton del formulario
    formulario.addEventListener("submit", enviar);

    // Con este ciclo recorremos los input del formulario y les agregamos los eventos focus y blur
    for (var i = 0; i < elementos.length; i++) {

        if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password" ) {

            elementos[i].addEventListener("focus", focusInput);
            elementos[i].addEventListener("blur", blurInput);
            
        } 
        
        
    }

}())