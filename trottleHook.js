const useThrottle = (fn, wait, option = { leading: true, trailing: true }) => {
    const timerId = useRef(); // track the timer
    const lastArgs = useRef(); // track the args
  
    // create a memoized debounce
    const throttle = useCallback(
      function (...args) {
        const { trailing, leading } = option;
        // function for delayed call
        const waitFunc = () => {
          // if trailing invoke the function and start the timer again
          if (trailing && lastArgs.current) {
            fn.apply(this, lastArgs.current);
            lastArgs.current = null;
            timerId.current = setTimeout(waitFunc, wait);
          } else {
            // else reset the timer
            timerId.current = null;
          }
        };
  
        // if leading run it right away
        if (!timerId.current && leading) {
          fn.apply(this, args);
        }
        // else store the args
        else {
          lastArgs.current = args;
        }
  
        // run the delayed call
        if (!timerId.current) {
          timerId.current = setTimeout(waitFunc, wait);
        }
      },
      [fn, wait, option]
    );
  
    return throttle;
  };


  const useDebounce = (fn, delay, immediate = false) => {
    // ref the timer
    const timerId = useRef();
  
    // create a memoized debounce
    const debounce = useCallback(
      function () {
        // reference the context and args for the setTimeout function
        let context = this,
          args = arguments;
  
        // should the function be called now? If immediate is true
        // and not already in a timeout then the answer is: Yes
        const callNow = immediate && !timerId.current;
  
        // base case
        // clear the timeout to assign the new timeout to it.
        // when event is fired repeatedly then this helps to reset
        clearTimeout(timerId.current);
  
        // set the new timeout
        timerId.current = setTimeout(function () {
          // Inside the timeout function, clear the timeout variable
          // which will let the next execution run when in 'immediate' mode
          timerId.current = null;
  
          // check if the function already ran with the immediate flag
          if (!immediate) {
            // call the original function with apply
            fn.apply(context, args);
          }
        }, delay);
  
        // immediate mode and no wait timer? Execute the function immediately
        if (callNow) fn.apply(context, args);
      },
      [fn, delay, immediate]
    );
  
    return debounce;
  };