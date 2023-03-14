function cube(n)
{
    return (n*n*n)
}

function max(a,b)
{
    if(a>b)
    {
        return a
    }
    return b
}

function sumArray(arr)
{
    let sum = 0
    for(let i of arr)
    {
        sum+=i
    }
    return sum
}

console.log(cube(9))
console.log(max(4,7))
const nums = [1,2,3,4,5,6,7,8,9,10]
console.log(sumArray(nums))

// Anonymous function is a function without name
const anonymousFun = function() 
{
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
}
anonymousFun()


// Expression Function
// it is also an anonymous function
// After we create a function without a name and we assign it to a variable.
// To return a value from the function we should call the variable
const square = function(n)
{
    return n * n
}
  
console.log(square(2))

// function double(n)
// {
//     return 2*n
// }
// this can also be written as

const double = n => 2*n

// this is called an arrow function

console.log(double(45))

function weightOfObject(mass, gravity = 9.81)
// function with default parameters
{
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object on Earth: ', weightOfObject(100)) 
// 9.81 gravity at the surface of Earth
console.log('Weight of an object on Moon: ', weightOfObject(100, 1.62))
// gravity at surface of Moon is 1.62