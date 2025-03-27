class Observable{
    constructor(observer){
        this.subscriber = observer
    }

    subscribe(obj){
        const {next, error, complete} = obj

        this.subscriber({
            next: (val) => {
                next(val)
            },
            error: (val) => {
                error(val)
            },
            complete: () => {
                complete()
            }
        })
    }
}

const observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.complete();
});

console.log('before subscribe');
observable.subscribe({
    next (value) {
      console.log("Value:", value);
    },
    error (err) {
      console.error("Error:", err);
    },
    complete () {
      console.log("Done!")
    }
});

console.log('after subscribe');

observable.subscribe({
    next (value) {
      console.log("Sub2 Value:", value);
    },
    error (err) {
      console.error("Sub2 Error:", err);
    },
    complete () {
      console.log("Sub2 Done!")
    }
});
