const { fstat } = require("fs")

const mongo = "./mongo.json"

const updateUsers = (id, userNewData) => {

    try {

     fs.readFile(mongo, "utf-8", (error, data) => {
        if(error) throw new Error(`${error}`);

        const usersObj = JSON.parse(data)

       const userUpdate = usersObj.users.find(user => users.id === id)

       if(userUpdate){
          userUpdate.name = userNewData.name
          userUpdate.lastname = userNewData.lastname
          userUpdate.dui = userNewData.dui
          userUpdate.correo = userNewData.correo

       }

        console.log(usersObj);

        fs.writeFile(mongo, JSON.stringify(usersObj) ,(error) => {
            if(error) throw Error(`${error}`);

            console.log("usuario actuañizado exitosamente por su id");
        })
     })

    }catch (error) {
        throw new Error(`${error}`);
    }
    
}

module.exports = uptadeUsers