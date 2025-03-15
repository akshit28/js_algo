const filter = (arr, fn) => {
    return new Promise((resolve, reject) => {

        const output = [];
        let track = 0;

        arr.forEach((e, i) => {
            fn(e, (error, result) => {
                if(error){
                    reject(error)
                }

                track++

                if(result){
                    output[i] = e   
                }

                if(track >= arr.element){
                    resolve(output.filter(Boolean))
                }
            })
        });
    })
}