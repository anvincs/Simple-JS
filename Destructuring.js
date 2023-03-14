// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
  
console.log(frontEnd)
console.log(backEnd)


//If we like to skip on of the values in the array we use additional comma.
// The comma helps to omit the value at that specific index
const numbers2 = [1, 2, 3]
let [num1, , num3] = numbers //2 is omitted

console.log(num1, num3)



const countries = [['India', 'New Delhi'], ['Japan', 'Tokyo'], ['England', 'London']]
// destructuring during iteration
for (const [country, city] of countries) {
console.log(country, city)
}


// destructuring an object
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle
  
console.log(width, height, area, perimeter)
// If the key is not found in the object the variable will be assigned to undefined.


const rect = {
    width: 20,
    height: 10
}
// object parameter with destructuring
const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
}
  
console.log(calculatePerimeter(rect)) // 60