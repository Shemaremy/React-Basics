import { useState } from "react";


// 1) USESTATE HOOK : Lets functional components keep and update track of information that changes over time.  

// 2) USEEFFECT HOOK: Allows functional components to perform side effects like subscribtions, fetching server data, ...

// 3) USECONTEXT: To access context values in functional components. It allows you to consume values from a Context without nesting, making it easier to share data across components.

// 4) USEREF HOOK :  It's commonly used to access or modify DOM elements directly. 

// 5) USEREDUCER: For managing state in functional components. It is similar to useState, but it accepts a reducer function with the current state and an action, allowing for more complex state logic.

// 6) USECALLBACK: To memoize functions in functional components. It returns a memoized version of the callback function that only changes if one of the dependencies has changed, optimizing performance by preventing unnecessary re-renders.

// 7) USEMEMO: Used to memoize values in functional components. It returns a memoized value that only changes when one of the dependencies has changed, optimizing performance by avoiding unnecessary computations.

// 8) USELAYOUTEFFECT: Similar to useEffect, but it runs synchronously after all DOM mutations. It is often used for measurements and DOM manipulations that need to be reflected immediately.

// 9) USEIMPERATIVEHANDLE: Used to customize the instance value that is exposed by a ref when using forwardRef. It allows you to specify which values should be exposed to parent components when using ref forwarding.

// 10) USEDEBUGVALUE: To display a label for custom hooks in React DevTools. It allows you to provide a custom label for your custom hooks, making it easier to debug and profile them.










function AddToCart(){
    const [count, setCount] = useState(0);              // We declared an array to call useState hook with the initial value of 0 which is passed directly to the first element of the array (count)

    const increment = ()=> setCount(count+1);           // setCount() is a built in function which is used to update state variables in react
    const decrement = ()=> setCount(count-1);           // So by this is like saying setCount(count = count + 1) to make it clear. But dont write this, I warned you


    return(
        <div>
            <button 
            onClick={decrement}
            style={{backgroundColor: "green", color: "white", marginLeft: "10px"}}>
                Remove</button>


            <button             
            onClick={increment}
            style={{backgroundColor: "green", color: "white", marginLeft: "10px"}}>Add</button>


            <button style={{marginLeft: "10px"}}>{count}</button>
        </div>
    );
}

export default AddToCart;