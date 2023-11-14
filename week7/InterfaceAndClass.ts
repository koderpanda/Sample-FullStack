
interface PersonInterface{
    name:string;
    age:number;
    greetfromclass():string
}

class Person implements PersonInterface{
    name:string 
    age:number
    constructor(name:string, age:number){
        this.name= name;
        this.age= age;
    }

    greetfromclass(){
        return(this.name+"hello from inside the call function")
    }
}


function greet(person:PersonInterface):string{
 return ("heello " + person.name)    
}

function classgreet(person:Person):string{
    return("heello from class"+ person.name)
}

var personObj= new Person("hareKrsna",123)
console.log(classgreet(personObj))

// console.log(greet({name:"hareKrsna",age:23}))

console.log(personObj.greetfromclass())