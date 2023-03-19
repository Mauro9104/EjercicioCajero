let usuario,
  clave,
  saldo = 2356491,
  clave2 = 1234,
  usuario2 = "mauro";
var contador = 2;

usuario = prompt("ingrese su usuario");
clave = prompt("ingrese su clave");

for (let i = 1; i <= 3; i++) {

  if (usuario == usuario2 && clave == clave2) {
    alert("el saldo  de su cuenta es " + saldo);
    usuario = prompt("ingrese su usuario");
    clave = prompt("ingrese su clave");
     }else 

    if (usuario != usuario2 && clave != clave2) {
      alert(" usuario y Contraseña incorrecto intento fallido : " +  " queda " + contador + " intentos");
      usuario = prompt("ingrese su usuario");
      clave = prompt("ingrese sue clave");
      contador--;
     }else

      if (usuario2 != usuario || clave == clave2) {
        alert("usuario incorrecto intento fallido : " +  " queda " + contador + " intentos");
        usuario = prompt("ingrese su usuario");
        clave = prompt("ingrese sue clave");
        contador--;
      } else

        if (usuario2 == usuario || clave != clave2) {
          alert("Contraseña incorrecta intento fallido : " +  " queda " + contador + " intentos");
          usuario = prompt("ingrese su usuario");
          clave = prompt("ingrese sue clave");
          contador--;
        } else
          contador = 0;
    if (contador == 0) {
      alert("su cuenta ha sido bloqueada");
      document.write("su cuenta ha sido bloqueada");
       
 }     

  
}


