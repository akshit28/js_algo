let bears = {grizzly: true}

let grizzlyCount = 0


let proxyBears = new Proxy(bears, {
    get: function(target, prop){
        if(prop == 'grizzly') grizzlyCount++

        return target[prop]
    },
    set: function(target, prop, value){
        if(['grizzly', 'polar', 'brown'].indexOf(prop) === -1){
            throw new Error("Thats is not acceptable")
        }

        target[prop] = value
    },
    deleteProperty: function(target, prop, value){
        console.log(`you have deleted ${prop}`)

        delete target[prop]
    }
})

proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly
proxyBears.grizzly
console.log(grizzlyCount)

// proxyBears.dvarf = true
proxyBears.polar = true

delete proxyBears.polar


function growl(){
    return 'grrr'
}


const loudGrowl = new Proxy(growl, {
    apply: function(target, thisArg, args){
        return target().toUpperCase() + '!!!'
    }
})

console.log(loudGrowl())

const person = {
    first: 'Bear',
    last: 'McBer'
}

const cleverPerson  = new Proxy(person, {
    get: function(target, prop){
        if(!(prop in target)){
            return prop.split('_').map(function(part){
                return target[part]
            }).join(' ')
        }

        return target[prop]
    }
})

console.log(cleverPerson.last_first)
cleverPerson.last = 'sharma'
console.log(person.last)

const bear = [
    {
        id: 1,
        name: 'grizzly'
    },
    {
        id: 2,
        name: 'brown'
    },
    {
        id: 4,
        name: 'polar'
    }
]


const getBear = new Proxy(bear, {
    get: function(target, prop){
        return target.filter(elem => elem.name == prop)
    }
})

console.log(getBear.polar)