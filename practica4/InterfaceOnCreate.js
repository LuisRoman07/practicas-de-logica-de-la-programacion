const LeerLinea = require("readline")
const vehicleOnCreate = require("./VehicleService")
const { log } = require("console")



const InterfazConsola = LeerLinea.createInterface({
   input : process.stdin,
   output : process.stdout
})


InterfazConsola.question("Porfavor ingrese el modelo del vehiculo", (model) => {

     InterfazConsola.question("Porfavor ingrese el color del vehiculo", (color) => {

         InterfazConsola.question("Porfavor ingrese el año del vehiculo", (year) => {

            InterfazConsola.question("Porfavor ingrese el estado del vehiculo", (isFuncional) => {

                  InterfazConsola.question("Porfavor ingrese la marca del vehiculo", (brand) => {

                     console.log(vehicleOnCreate, {model, color, year, isFuncional, brand});
                      InterfazConsola.close()

                  })

            })

        })


     })


})