function func(num) {
    return num
}

const onced = once(func)

function once(func) {
    // your code here
    let isCalled = false
    let result = null
    return function (...args) {
        if (!isCalled) {
            result = func.call(this, ...args)
            isCalled = true
        }
        return result
    }
}

onced(1)
// 1, func called with 1
onced(2)