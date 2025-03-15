const asyncTask = function(time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`complete ${time}`)
        }, 100 * time);
    })
}

const promises = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(7),
    asyncTask(2),
    asyncTask(5)
]

const asyncExecutor = (promises) => {
    return promises.reduce((prev, current) => {
        return prev.then(() => {
            return current.then(val => console.log(val))
        });
    }, Promise.resolve())
}

asyncExecutor(promises)