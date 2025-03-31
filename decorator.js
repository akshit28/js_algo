const withTimeStamp = (fn) => {
    return (msg) => {
        const time = new Date().toISOString();
        fn(`${time} ${msg}`)
    }
}

const withUsername = (fn) => {
    return (message) => {
        fn(`${message}!!!`)
    }
}

const sendMessage= (message) => {
    console.log(`Message: ${message}`);
  }

const decorator = withTimeStamp(withUsername(sendMessage))

decorator("there")

class car{
    honks(){
        console.log("Honks")
    }
}

class turboCar extends car{
    constructor(){
        
    }
}