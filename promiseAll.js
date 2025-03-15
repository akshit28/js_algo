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


