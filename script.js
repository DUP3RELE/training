var createCounter = function(init) {
    
    let current = init;
    
    const increment = () => {
        current += 1
        return current;
    }
    const decrement = () => {
        current -= 1
        return current;
    }
    const reset = () => {
        current = init;
        return init
    }
    return {increment, decrement, reset};
};