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

throttle([1,2,3,4,5,6,7,8,9], 5 , (task)=> {
    console.log(task)
}, 2000)
throttle([1,2,3,4,5,6,7,8,9], 5 , (task)=> {
    console.log(task)
}, 2000)
throttle([1,2,3,4,5,6,7,8,9], 5 , (task)=> {
    console.log(task)
}, 2000)