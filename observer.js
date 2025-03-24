class Observer{
    constructor(){
        this.observer = []
    }

    subscribe(func){
        this.observer.push(func)
    }

    unsubscribe(func){
        this.observer = this.observer.filter(fn => fn != func)
    }

    notify(data){
        this.observer.forEach(fn => fn(data))
    }
}

const observer = new Observer()

let logger = (data) => {
    console.log("Logged", data)
}

let notifer = (data) => {
    console.log("Notified", data)
}

observer.subscribe(logger)
observer.subscribe(notifer)

observer.notify("Hiiii")