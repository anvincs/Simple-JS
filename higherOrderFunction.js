// a callback function
const callback = (n) => 
{
    return n ** 2
}

// function that takes other function as a callback
function cube(callback, n)
{
    return callback(n) * n
}
console.log(cube(callback, 3))
// A callback is a function which can be passed as parameter to other function.


//  Returning function
// Higher order function returning an other function
const higherOrder = n =>
{
    const doSomething = m =>
    {
      const doWhatEver = t =>
      {
        return 2 * n + 3 * m + t
      }
      return doWhatEver
    }
    return doSomething
}
console.log(higherOrder(2)(3)(10))


function sayHello()
{
    console.log('Hello')
}

// setInterval(sayHello, 1000)
// it prints hello in every second, 1000ms is 1s

setTimeout(sayHello,2000)
// it prints hello after it waits for 2 s
// only prints once