const myPromiseAll = function(taskList){
    const result = []

    let promiseCompleted = 0;

    return new Promise((resolve, reject) => {
        taskList.forEach((promise, index) => {
            promise.then((val) => {
                result[index] = val;
                promiseCompleted++;

                if(taskList.length == promiseCompleted){
                    resolve(result)
                }
            }).catch((error) => {
                reject(error)
            })
        })


    })
}

function task(time){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            // if(time > 4000){
            //     reject('Rejected')
            // }else{
                resolve(time)
            // }
        }, time);
    })
}


const taskList = [
    task(1000),
    task(5000),
    task(3000)
]

myPromiseAll(taskList).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})

function promisePolyfill(executor) {
    
    let onResolve, onReject, isCalled = false, isFulfilled = false, value;

    function resolve(val){
        value = val
        isFulfilled = true
        if(typeof onResolve == 'function'){
            isCalled = true
            queueMicrotask(()=> onResolve(value))
        }
    }

    function reject(val){
        value = val
        isFulfilled = true
        if(typeof onReject == 'function'){
            isCalled = true
            queueMicrotask(()=> onReject(value))
        }
    }

    this.then = function(callback){
        return new promisePolyfill((resolve, reject) => {
            onResolve = (val) => {
                try {
                    let result = callback(val)
                    if(result instanceof promisePolyfill){
                        result.then(resolve).catch(error)
                    }else{
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }          
            
            if(isFulfilled && !isCalled){
                isCalled = true
                queueMicrotask(()=> onResolve(value))
            }
        })
    }

    this.catch = function(callback){
        return new promisePolyfill((resolve, reject) => {
            onReject = (val) => {
                try {
                    let result = callback(val)
                    if(result instanceof promisePolyfill){
                        result.then(resolve).catch(error)
                    }else{
                        resolve(result)
                    }
                } catch (error) {
                    reject(error)
                }
            }

            if(isFulfilled && !isCalled){
                isCalled = true
                queueMicrotask(() => onReject(value))
            }
        })
    }


    executor(resolve, reject)
}