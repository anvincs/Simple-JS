// Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems.
// All builtin methods take callback function. 

//        1.foreach
//   --------------------
// It takes a callback function with elements, index parameter and array itself.
// The index and the array optional.
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
// for every num in numbers , print num

numbers.forEach(num => sum+=num)
// for every num in numbers , add it to sum
console.log(sum)


//        2.map
//   --------------------
// Iterate an array elements and modify the array elements.
// It takes a callback function with  elements , index , array parameter and 'return' a new array.


const digits = [1, 2, 3, 4, 5]
const digitsSquare = digits.map((num) => num * num)
// for every num in digits, modify num to num*num

console.log(digitsSquare)


//        3.filter
//   --------------------
// Filter out items which fulfill filtering conditions and 'return' a new array.

const nums = [1,2,3,4,5,6,7,8,9,10]
const evennums = nums.filter((num) => num%2==0)
// for every num in nums filter all the even numbers
console.log(evennums)


//        4.every
//   --------------------
// Check if all the elements are similar in one aspect. It returns boolean

const langs = ['C', 'C++', 'Java', 'JavaScript']
const areAllStr = langs.every((lang) => typeof lang === 'string')
// Are all strings?

console.log(areAllStr)


//        5.find
//   --------------------
// Returns the first element that satisfies the condition

const ages = [24, 22, 15, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)


//        6.findIndex
//   --------------------
// Returns the position of the first element that satisfies the condition

const accessories = ['Laptop','Mobile','TV','Earpods','Mouse']
const result = accessories.findIndex((item) => item.length<6)
console.log(result)


//        7.some
//   --------------------
// Check if some of the elements are similar in one aspect. It returns boolean

const nums2 = [1,3,7,9,12]
const areSomeEven = nums2.some((n) => n%2==0)
// checks if some of the elements is even
console.log(areSomeEven)