function fetchAllFeature(){
    console.log("call to backend")
    return new Promise((resolve, reject) => {
        const sampleFeatures = {
            "extended-summary": true,
            "feedback-dialog": false
        }

        setTimeout(resolve, 100, sampleFeatures)
    })
}

const MAX_CATCH_TTL = 100000
let fetchInstance = null

let cache = {
    featureFlags: {},
    ttl: null
}

const getFeatureState = async (name) => {
    let isCache = Object.keys(cache.featureFlags).length
    let isCacheFresh = (Date.now() - cache.ttl) < MAX_CATCH_TTL
    
    if(isCache && isCacheFresh){
        console.log("From cache")
        return cache.featureFlags[name] ?? false
    }

    try {
        console.log("Api call")
        let features = await fetchAllFeature()
        cache.featureFlags = features
        cache.ttl = Date.now()
        return cache.featureFlags[name]
    } catch (error) {
        return false
    }
}


getFeatureState("extended-summary").then(val => {
    console.log("extended-summary", val)
})


setTimeout(() => {
    getFeatureState("extended-summary1").then(val => {
        console.log("extended-summary1", val)
    })    
}, 200);

setTimeout(() => {
    getFeatureState("feedback-dialog").then(val => {
        console.log("feedback-dialog", val)
    })    
}, 300);

