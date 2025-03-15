const mapLimit = (arr, limit, fn) => {
    return new Promise((resolve, reject) => {
        let result = [];
    })
}


let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
    // i am async iteratee function
    // do async operations here
    setTimeout(function () {
        num = num * 2;
        console.log(num);
        callback(null, num);
    }, 2000); });


  numPromise
    .then((result) => console.log("success:" + result))
    .catch(() => console.log("no success"));