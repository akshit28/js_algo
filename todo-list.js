const api = 'https://dummyjson.com/todos?limit=10&skip=80'

async function fetchTodo(){
    try {
        const response = await fetch(api)
        const data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}

