function createAsyncTask(){
    const value = Math.floor(Math.random()*10)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value < 5){
                reject(`Error ${value}`)
            }else{
                resolve(value*1000)
            }
        }, value*1000);
    })
}


// createAsyncTask().then((val)=>{
//     console.log(val)
// }).catch((error) => {
//     console.error(error)
// })

let tasks = [
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask(),
    createAsyncTask()
]

const asyncSequence = (tasks,callback) => {
    let result = []
    let errors = []
    let completed = 0

    tasks.reduce((prev, curr) => {
        return prev.finally(()=> {
            return curr.then((val)=> {
                result.push(val)
            }).catch((error)=> {
                errors.push(error)
            }).finally(()=> {
                completed++;
                if (completed === tasks.length){
                    callback(errors, result)
                }
            })
        })
    }, Promise.resolve())
}

const asyncParallel = (tasks, callback) => {
    const result = []
    const errors = []
    let completed = 0

    tasks.forEach(task => {
        task
        .then((val) => {
            result.push(val)
        })
        .catch((error) => {
            errors.push(error)
        })
        .finally(() => {
            completed++;
            if(completed >= tasks.length){
                callback(errors, result)
            }
        })
    })
}

// asyncParallel(tasks, (error, result) => {
//     console.log("error", error)
//     console.log("result", result)
// })

asyncSequence(tasks, (error, result) => {
    console.log("error", error)
    console.log("result", result)
})
