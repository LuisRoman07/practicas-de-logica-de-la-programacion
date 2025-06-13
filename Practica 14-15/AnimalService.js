
//funcion normal o ordinaria 

const animalService1 = () => {}

//factory function 

const animalService = () => ({
 
    name : "Rambo",
    age : 2,
    color : "Cafe",

    
    create : (name) => {
        return `${name}`
    },

    update : () => {
        return "updating animal"
    },

    delete : () => {
        return "delete animal"
    },

    getAll : () => {
        return "gettin animals"
    }
})

const animalS = animalService()

console.log(animalS.create("Michy"));
console.log(animalS.getAll());
console.log(animalS.update());
console.log(animalS.delete());

class Animal {

    name

    constructor(name){
        this.name = name 
    }

    eat(){
        return "El animal esta comiendo"
    }

}

const animal = new Animal ("michy")

console.log(animal.eat);