// const fetchNcache = (url, params) => {
//     const cachedResponse = {}

//     return async function(...args){
//         if(cachedResponse.hasOwnProperty(url)){
//             console.log("From cache***")
//             return cachedResponse[url]
//         }
    
//         try {
//             const response = await fetch(url)
//             const data = await response.json();
//             cachedResponse[url] = data;
//             return data;
//         } catch(error){
//             console.log("Error", error)
//         }
//     }
// }

// const fetchData = fetchNcache('https://dummyjson.com/todos?limit=10&skip=80')

// fetchData().then(data => console.log("First call:", data));
// fetchData().then(data => console.log("Second call:", data));

// // const fetchData = async () => {
// //     const data1 = await fetchNcache('https://dummyjson.com/todos?limit=10&skip=80');
// //     console.log(data1);

// //     const data2 = await fetchNcache('https://dummyjson.com/todos?limit=10&skip=80');
// //     console.log(data2);
// // };

// // fetchData()

// const fetchNcache = (url, params) => {
//     const cachedResponse = {}; // Scoped to this specific function instance

//     return async function (...args) {
//         if (cachedResponse.hasOwnProperty(url)) {
//             console.log("From cache***");
//             return cachedResponse[url];
//         }

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             cachedResponse[url] = data; // Cache the response
//             return data;
//         } catch (error) {
//             console.log("Error", error);
//         }
//     };
// };


function cachedApiCall(duration){
    const cache = {};

    return async (url) => {
        if(cache[url]){
            console.log("Served from cache")
            return cache[url];
        }

        try{
            let res = await fetch(url)
            let response = await res.json()
            cache[url] = response
            return response;
        }catch(e){
            console.log(error)
        }
        setTimeout(() => {
            delete cache[url];
        }, duration);
    }
}

// Each call to fetchNcache creates a new function with its own cache
const fetchData = fetchNcache('https://dummyjson.com/todos?limit=10&skip=80');

// Calls to the same instance will use the cache
fetchData().then(data => console.log("First call:", data));
setTimeout(() => {
    fetchData().then(data => console.log("Second call:", data));    
}, 3000);


// // If you create a new instance, it will have a separate cache
// const fetchData2 = fetchNcache('https://dummyjson.com/todos?limit=10&skip=100');
// fetchData2().then(data => console.log("Different URL:", data));
