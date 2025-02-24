const leerLinea = require ("readline");

const interfazConsola = leerLinea.createInterface({
  input : process.stdin,
  output : process.stdout   
})


     interfazConsola.question("por favor ingrese el nombre completo", (nombre) => {
    
     if (nombre.length < 3) {
       console.log("porfavor ingrese un nombre valido de almenos 3 caracteres");
        interfazConsola.close();
    }

     interfazConsola.question("por favor ingrese su correo:", (correo) => {
     if (!correo.includes("@")) {
     console.log("porfavor ingrese un correo valido")
     interfazConsola.close();
     return;
    
    }

      interfazConsola.question("porfavor ingrese la contraseña",(password) => {
      if(password.length < 8){
       console.log("la contraseña debe ser mayor a 8 caracteres");
       interfazConsola.close()
       return;
      }

      console.log("Usuario creado exitosamente");
      console.log(`nombre:${nombre}\ncorreo:${correo}\npassword:${password}`);
     interfazConsola.close()
    })
  })


})git remote add origin https://github.com/LuisRoman07/practicas-de-logica-de-la-programacion.git