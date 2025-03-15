
const SAMPLE_FEATURES = {
    show_dialog_box: true,
    enable_new_pricing: true,
  };
  
  const cache = {
    featureFlag: {},
    ttl: null
  }
  
  const MAX_CATCH_TTL = 100000
  let fetchInstance = null
  
  // returns the state of *all* features for the current user
  function fetchAllFeatures() {
    console.log("call to backend")
    // mocking the fetch API call
    return new Promise((resolve) => {
      setTimeout(() => resolve(SAMPLE_FEATURES), 100);
    });
  }
  
  // DO NOT CHANGE THE FUNCTION NAME
  function getFeatureState(featureName, defaultValue) {
    const isCacheDataPresent = Object.keys(cache.featureFlag).length
    const isCacheFresh = Date.now() - cache.ttl < MAX_CATCH_TTL
    if (isCacheDataPresent && isCacheFresh) {
      console.log("From cache", featureName)
      const value = Object.prototype.hasOwnProperty.call(cache.featureFlag, featureName) ? cache.featureFlag[featureName] : defaultValue;
      console.log(featureName, value)
      return Promise.resolve(value)
    }
  
    if (fetchInstance instanceof Promise) {
      console.log("inside chaining")
      return fetchInstance.then(featureFlag => {
        let value = Object.prototype.hasOwnProperty.call(featureFlag, featureName) ? featureFlag[featureName] : defaultValue
        console.log("fetchInstance", featureName, value)
        return value
      }).catch(() => defaultValue)
    }
    // write your solution here
    fetchInstance = fetchAllFeatures().then((featureFlag) => {
      cache.featureFlag = featureFlag
      cache.ttl = Date.now()
      return Object.prototype.hasOwnProperty.call(featureFlag, featureName) ? featureFlag[featureName] : defaultValue
    }).catch(() => defaultValue)
  
    return fetchInstance
  }
  
  getFeatureState('enable_new_pricing', false).then(function (isEnabled) {
    if (isEnabled) {
      console.log("enable_new_pricing avaiable")
    } else {
      console.log("enable_new_pricing unAvaiable")
    }
  })
  
  setTimeout(()=> {
    getFeatureState('show_dialog_box', false).then(function (isEnabled) {
      if (isEnabled) {
        console.log("show_dialog_box avaiable")
      } else {
        console.log("show_dialog_box unAvaiable")
      }
    })  
  }, 300)
  
  setTimeout(()=> {
    getFeatureState('show_pricing_v2', false).then(function (isEnabled) {
    if (isEnabled) {
      console.log("show_pricing_v2 avaiable")
    } else {
      console.log("show_pricing_v2 unAvaiable")
    }
  })
    
  }, 300)