function validateForm(evt){
	var nombre = document.getElementById("name").value;
    	if(nombre == ""){
			var campoTexto= document.getElementById("name"); 
			var alerta= document.createTextNode("Ingrese su nombre.");
			mensaje(campoTexto,alerta,evt);
			evt.preventDefault();
		}
		
    var apellido = document.getElementById("lastname").value;
       if(apellido == "") {
          var campoTexto = document.getElementById("lastname");
          var alerta = document.createTextNode("Ingrese su apellido");
          mensaje(campoTexto,alerta);
          evt.preventDefault();
        }

    if (apellido.charAt(0) == apellido.charAt(0).toLowerCase() || nombre.charAt(0) == nombre.charAt(0).toLowerCase()){
    	 var campoTexto = document.getElementById("name","lastname");
         var alerta = document.createTextNode(" La primera letra debe ser Mayúscula");
         mensaje(campoTexto,alerta);
         evt.preventDefault();
    }
	else{
		return true;
	}

    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ( !expr.test(email) ){
        var hermano = document.getElementById("input-email");
        var texto = document.createTextNode("Verifique su email");
        mensaje(hermano, texto);
        evt.preventDefault();
    }

	var contrasena = document.getElementById("input-password").value;
		if(contrasena.length < 5 ){
			var campoTexto = document.getElementById("input-password");
			var alerta= document.createTextNode("La contraseña debe tener al menos 6 carácteres");
			mensaje(campoTexto,alerta);
		}else if(contrasena == "123456" || contrasena =="password" || contrasena == "098754"){
			alert("Escribe otra contraseña");
		}

	if (document.getElementsByTagName("select")[0].value == 0){
		var campoTexto = document.getElementsByTagName("select")[0];
		var alerta = document.createTextNode("Debes seleccionar una opción");
		mensaje(campoTexto,alerta);
		
	}
}
function mensaje (campoTexto,alerta){
	var mensaje2 = document.createElement("span");
	var mensaje1 = campoTexto.parentNode;

	mensaje1.insertBefore(mensaje2,campoTexto);

	mensaje2.appendChild(alerta);
	return mensaje2;
}