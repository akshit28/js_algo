class Stack {
    constructor() {
        this.item = []
    }

    push(elem) {
        this.item.push(elem)
    }

    pop(elem) {
        this.item.pop(elem)
    }

    isEmpty() {
        return this.item.length === 0
    }
}

let checkBalancedParanthesis = (str) => {
    let stack = new Stack()

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i])
        }

        if (str[i] == ')' || str[i] == '}' || str[i] == ']') {
            if (stack.isEmpty()) {
                return false
            }

            let temp = stack.pop()

            if (temp == '(' && str[i] != ')') {
                return false
            } else if (temp == '{' && str[i] != '}') {
                return false
            } else if (temp == '[' && str[i] != ']') {
                return false
            }
        }
    }

    if (stack.isEmpty()) {
        return true
    } else {
        return false
    }
}

console.log(checkBalancedParanthesis('[{}]'))
console.log(checkBalancedParanthesis('[{}{}{}{]'))
console.log(checkBalancedParanthesis('([{[]}]){}[]]'))