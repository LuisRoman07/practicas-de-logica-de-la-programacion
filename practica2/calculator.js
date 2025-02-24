const Restar = require("./restar");
const Sumar = require("./sumar");
const leerLinea = require("readline")


const interfazConsola = leerLinea.createInterface({
    input : process.stdin,
    output : process.stdout
})


interfazConsola.question("porfavor ingrese el primer numero" , (numero1)=> {

    interfazConsola.question("porfavor ingrese el segundo") , (numero2)=> {

            interfazConsola.question("porfavor ingrese su operacion\n1-Sumar\n2-Restar\n3-Multiplicar\n4-Dividir",(operacion) => {

   
                let n1 = parseInt(numero1)
                let n2 = parseInt(numero2)
         
                if (parseInt(operacion) == 1) { 
            

             console.log(Sumar(numero1, numero2));

             console.log(`Su suma es ${Sumar(n1, n2)}`); 
                interfazConsola.close()
            }else if (parseInt(operacion) == 2) {

             console.log(`Su resta es ${Restar(n1, n2)}`);

                interfazConsola.close()
            
            }else if (parseInt(operacion)== 3) {


             console.log(`Su multiplicacion es ${multiplicar(n1, n2)}`);
                interfazConsola.close()   
            }else if (parseInt(operacion)== 4) {
                console.log(`Su divicion es ${dividir(n1, n2)} `);
                    interfazConsola.close()
            
            }else {

             console.log("porfavor ingrese una opcion valida")

            }      

        })
    }     
})
       