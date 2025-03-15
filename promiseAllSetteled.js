const allSettled = (promises) => {
    const mappedPromise = promises.map((p) => {
        return Promise.resolve(p).then(
            val => ({status: 'fulfilled', value: val}),
            error => ({status: 'rejected', value: error})
        )
    })

    return Promise.all(mappedPromise)
}

const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3)
    }, 2000);
})

const b = new Promise((resolve, reject) => {
    reject(5)
})

const c = new Promise((resolve, reject) => {
    reject(6)
})

allSettled([a,b,c]).then((val) => {
    console.log(val)
})