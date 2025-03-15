class Observer{
    constructor(){
        this.observers = []
    }

    subscribe(obs){
        this.observers.push(obs)
    }

    unSubscribe(obs){
        this.observers = this.observers.filter((observer) => observer !== obs)
    }

    notify(data){
        this.observers.forEach(obs => obs(data))
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