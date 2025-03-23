function promisePolyfill(executor){
    let onResolve, onReject,
      isFulfilled = false,
      isCalled = false,
      value;
  
      function resolve(val){
          isFulfilled = true
          value = val
          if(typeof onResolve === 'function'){
              isCalled = true
              queueMicrotask(()=> onResolve(value))
          }
      }
  
      function reject(val){
          isFulfilled = true
          value = val
          if(typeof onReject === 'function'){
              isCalled = true
              queueMicrotask(()=> onReject(value))
          }
      }
  
      this.then = function(callback){
          return new promisePolyfill((resolve, reject) => {
              onResolve = (val) => {
                  try {
                      let result = callback(val)
                      if(result instanceof promisePolyfill){
                          result.then(resolve).catch(reject)
                      }else{
                          resolve(result)
                      }
                  } catch (error) {
                      reject(error)
                  }
              }
  
              if(isFulfilled && !isCalled){
                  isCalled = true
                  queueMicrotask(() => onResolve(value))
              }
  
          })
      }
  
      this.catch = function(callback){
          return new promisePolyfill((resolve, reject) => {
              onReject = (val) => {
                  try {
                      let result = callback(val)
                      if(result instanceof promisePolyfill){
                          result.then(resolve).catch(reject)
                      }else{
                          resolve(result)
                      }
                  } catch (error) {
                      reject(error)
                  }
              }
  
              if(isFulfilled && !isCalled){
                  isCalled = true
                  queueMicrotask(() => onReject(value))
              }
  
          })
      }

      this.finally = function (callback) {
        return new promisePolyfill((resolve, reject) => {
            function handleFinally() {
                try {
                    callback(); // Call the cleanup function
                    if (value instanceof promisePolyfill) {
                        value.then(resolve).catch(reject);
                    } else {
                        // Pass through the original value or error
                        isFulfilled ? resolve(value) : reject(value);
                    }
                } catch (error) {
                    reject(error);
                }
            }

            if (isFulfilled) {
                queueMicrotask(handleFinally);
            } else {
                onResolve = onReject = handleFinally;
            }
        });
    };
  
      // this.all = function(promiseList){
      //     let result = []
      //     let count = 0
      //     return new promisePolyfill((resolve, reject) => {
      //         promiseList.forEach((promise, index) => {
      //             promise.then((val) => {
      //                 result[index] = val
      //                 count++
      //                 if(count == promiseList.length){
      //                     resolve(result)
      //                 }
      //             }).catch((error) => reject(error))
      //         });
      //     })
      // }
  
      executor(resolve, reject)
  }
  
  promisePolyfill.all = function(promiseList){
      let result = []
      let count = 0
      return new promisePolyfill((resolve, reject) => {
          promiseList.forEach((promise, index) => {
              promise.then((val) => {
                  result[index] = val
                  count++
                  if(count == promiseList.length){
                      resolve(result)
                  }
              }).catch((error) => reject(error))
          });
      })
  }