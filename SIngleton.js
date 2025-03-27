class Singleton{
    constructor(){
        if(!Singleton.instance){
            Singleton.instance =  this
        }

        return Singleton.instance
    }
}

// const a = new Singleton()
// const b = new Singleton()

// console.log(a == b)

class Singleton1{
    start(){
        console.log('start logging')
    }
    stop(){
        console.log('stop logging')
    }
}

const instance = new Singleton1()
console.log(instance)
instance.env = 'dev'

console.log(instance)
console.log(instance.start())
const instance1 = new Singleton1()
Object.freeze(instance1)
instance1.name = 'sha'
console.log(instance1)
// console.log(instance1.start())