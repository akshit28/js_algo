class EventEmitter{
    constructor(){
        this.events = {}
    }

    addListener(eventName, listner){
        if(!this.events[eventName]){
            this.events[eventName] = []
        }

        this.events[eventName].push(listner)
    }

    emit(eventName, data){
        const listners = this.events[eventName]

        listners.forEach(listner => {
            listner(data)
        });
    }

    removeListner(eventName, inputListner){
        const listners = this.events[eventName]
        if(listners){
            this.events[eventName] = this.events[eventName].filter((listner) => listner !== inputListner)
        }
    }
}

const myEmitter = new EventEmitter()

const callback1 = data => {
    console.log(`callback1 ${data}`)
}

const callback2 = data => {
    console.log(`callback 2 ${data}`)
}

myEmitter.addListener('event1', callback1)
myEmitter.addListener('event2', callback1)

myEmitter.emit('event1', 'Hello world')
myEmitter.emit('event2', 'Event2')