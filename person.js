class Person{
    constructor(name, age){
        this.name = name;
        this.age =age;
    }

    greeting(){
        console.log(`my name is ${this.name}, and my age ${this.age}`)
    }
}

module.exports =Person