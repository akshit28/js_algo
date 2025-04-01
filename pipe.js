const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

function pipe(funcs) {
	return function(args){
		let result = args
		for(fun of funcs){
			result = fun.call(this, result)
		}
		return result
	}
	
}