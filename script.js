function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function (...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    };
}

function originalFunction(x, y) {
    return x + y;
}

const callOnce = once(originalFunction);

console.log(callOnce(2, 3)); 
console.log(callOnce(4, 5));