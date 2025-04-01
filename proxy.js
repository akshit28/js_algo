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
