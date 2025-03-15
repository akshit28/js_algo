function debounce (fn , delay){
    let timer;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}


const hello = () => {
    console.log("hello")
}

const hello1 = () => {
    console.log("hello1")
}

debounce(()=> hello(), 1000)
debounce(() => hello1(), 1000)