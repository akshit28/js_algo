class Singleton{
    constructor(){
        if(!Singleton.instance){
            Singleton.instance =  this
        }

        return Singleton.instance
    }
}

const a = new Singleton()
const b = new Singleton()

console.log(a == b)