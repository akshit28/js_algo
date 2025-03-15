const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retryWithDelay = (operation, retry = 3, delay = 5, finalErr = 'Retry failed') => new Promise((resolve, reject) => {
    return operation().then(resolve).catch((resosn) => {
        if(retry > 0){
            return wait(delay).then(
                retryWithDelay.bind(null, operation, retry - 1, delay, finalErr)
            ).then(resolve).catch(reject)
        }
    })

    return reject(finalErr)
})