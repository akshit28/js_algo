const throttle = (arr, concurrency, cb, delay) => {
    let tasksQueu = []
    let lastRan;
    let lastFunc;

    return function(){
        if(!lastRan){
            taskQueue.push(...arr)

            let currentQueue = tasksQueu.splice(0,concurrency)
            cb(currentQueue)
            lastRan = Date.now()
        }else{
            clearTimeout(lastFunc)
            lastFunc =  setTimeout(() => {
                if(Date.now() - lastRan >= delay){
                    taskQueue.push(...arr)
                    let currentQueue = tasksQueu.splice(0,concurrency)
                    cb(currentQueue)
                    lastRan = Date.now()
                }
            }, delay - (Date.now()-lastRan));   
        }

    }
}

// throttle([1,2,3,4,5,6,7,8,9], 5 , (task)=> {
//     console.log(task)
// }, 2000)
// throttle([1,2,3,4,5,6,7,8,9], 5 , (task)=> {
//     console.log(task)
// }, 2000)
// throttle([1,2,3,4,5,6,7,8,9], 5 , (task)=> {
//     console.log(task)
// }, 2000)


const memoize = (fn) => {
    let cache = {}

    return function(...args){
        let params = JSON.stringify(args)

        if(cache[params]){
            console.log("From cache")
            return cache[params]
        }else{
            console.log("fn call")
            let result = fn(...args)
            cache[params] = result
            return result
        }
    }
}


function multiply(a,b){
    return a*b
}


let multiplier = memoize(multiply)
// console.log(multiplier(2,3))
// console.log(multiplier(2,3))


// const wait = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//     }, 100);
// })

const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, 100);
    })
}

let ak = wait();

ak.then((val) => {
    console.log(val)
}).then(()=> {
    console.log(2)
})


const throttleFn = (fn, limit) => {
    let lastRan;
    let lastFunc;

    return function(){
        const context = this
        const args = arguments
        if(!lastRan){
            fn.apply(context, args)
            lastRan = Date.now() 
        }else{
            clearTimeout(lastFunc)
            lastFunc = setTimeout(() => {
                if((Date.now() - lastRan) >= limit){
                    fn.apply(context, args) 
                    lastRan = Date.now() 
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}