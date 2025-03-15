class Event{
    constructor(){
        this.subscriptionList = new Map()
        this.subscribeOnce = new Map()
        this.subscribeAsyncList = new Map()
    }


    subscribe(event, cb){
        if(this.subscriptionList.has(event)){
            let existing = this.subscriptionList.get(event)
            this.subscriptionList.set(event, [...existing, cb])
        }else{
            this.subscriptionList.set(event, [cb])
        }
        
        return {
            remove: () => {
                const existingCallback = this.subscriptionList.get(event);
                const filtered = existingCallback.filter((e) => e !== cb)
                this.subscriptionList.set(event, filtered)
            }
        }
    }

    publish(event, val){
        if(this.subscriptionList.has(event)){
            let cb = this.subscriptionList.get(event)

            if(Array.isArray(cb)){
                cb.forEach((fn) => {
                    fn.call(null, val)
                })
            }else{
                cb.call(null, val)
            }
            
        }
    }
}

const events = new Event()

const newUserSub = events.subscribe("new-user", function(payload){
    console.log(`Sending Q1 news to " ${payload}`)
})

events.publish("new-user", "John")

const newUserSub2 = events.subscribe("new-user", function(payload){
    console.log(`Sending Q2 news to " ${payload}`)
})

events.publish("new-user", "Doe")
newUserSub.remove()

events.publish("new-user", "Akshit")


