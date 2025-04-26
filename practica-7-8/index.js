const consoleInterface = require("./console.service");
const createDatabase = require("./create.db.service");
const createUser = require("./create.user.service");
const {v4 : uuid} = require("uuid");
const uptadeUsers = require("./update.user.service");
const deleteUserById = require("./delete.user.service");
const showUser = require("./show.users.service");


const main = () => {

    try{

      consoleInterface.question("porfavor ingrese una opcion\n1-crear base de datos\n2-crear un usuario\n3-actualizar usuario mediante su id\n4-eliminar un usuario por su id\n5-ver todos los usuarios", (Option) => {

        switch (parseInt(Option)) {
          case 1:
          
          createDatabase()
          
          setTimeout(() => {

            main()

          }, 3000)

           break;
       
          case 2:

          consoleInterface.question("porfavor ingresa tu nombre :", (nombre) => {

              consoleInterface.question("porfavor ingrese su apellido :", (apellido) => {

                 consoleInterface.question("porfavor ingrese su dui :", (dui) => {

                  consoleInterface.question("porfavor ingrese su correo eletronico :", (correo) => {

                     const newUser = {
                        id : uuid(),
                        name : nombre,
                        lastname : apellido,
                        dui : dui,
                        correo : correo
                      }
                      createUser(newUser)
                     
                      setTimeout(() => {

                        main()
                        
                      }, 3000)
                   })

                })

              })

          })

          

      
           break;
 
          case 3:

          consoleInterface.question("porfavor ingrese el id del usuario a actualizar", (id) =>  {
 
              consoleInterface.question("porfavor ingrese el nombre", (nombre) => {

                consoleInterface.question("porfavor ingrese su dui", (dui) => {

                    consoleInterface.question("porfavor ingresa tu correo", (correo) => {

                      
                      const newData = {
                        id : uuid(),
                        name : nombre,
                        lastname : apellido,
                        dui : dui,
                        correo : correo
                      }

                      uptadeUsers(id, userNewData)

                      setTimeout(() => {
                         main()
                      }, 3000)

                    })
                 })
              })
          })

          break;

          case 4: 

            
              consoleInterface.question("porfavor ingrese el id del user que quiere borrar", (id) => {

              })

              deleteUserById()

              setTimeout(() => {
                main()
              }, 3000)
          break;
          
          case 5:

           showUser()

           setTimeout(() => {
             main()
           }, 3000)
          break;


           default:
             break;
          }
       


      })


    }catch (error) {
       throw new Error(`${error}`)

 
    }

}

main()