const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 
 function curry(fn) {
   return function curried(...args){
     let expectedArg = fn.length
     let isEnoughArg = args.filter(arg => arg !== curry.placeholder)
 
     if(isEnoughArg.length>=expectedArg){
       let newArgs = args.sort()
       return fn.call(this, ...newArgs)
     }else{
       return function(...nextArgs){
         let newArgs = args.concat(nextArgs).filter(arg => arg !== curry.placeholder)
         return curried.apply(this, newArgs)
       }
     }
   }
 
 }
 
 curry.placeholder = Symbol()
 const curriedJoin = curry(join)
 const _ = curry.placeholder
 
 curriedJoin(_,_,3,4)(1,_)(2,5)
 