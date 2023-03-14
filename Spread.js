const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
// ...(3 dots) is the spread operator
// ... indicates remaining
console.log(num1, num2, num3)
console.log(rest)


const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)


const user = {
    name:'Anvin',
    title:'Programmer',
    country:'India',
    state:'Kerala',
    city:'Thrissur'
}
// spread operator to copy object
const copiedUser = {...user}
console.log(copiedUser)


// spread operator with arrow function


const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum   
}  
console.log(sumAllNums(1, 2, 3, 4, 5))
  