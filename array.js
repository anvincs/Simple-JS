const arr=[1,2,3,4,5]
console.log(arr)
console.log(arr.length)
console.log(arr[2])
arr[2]=90
console.log(arr)

const arr2 = Array(8).fill(1)
// creates an array of size 8 and initialize all values with 1
console.log(arr2)

// let js = "Javascript"
// console.log(js.split(''))
// split can be used on strings

// let companies = 'Google, Microsoft, Amazon, Twitter'
// let com = companies.split(',')
// console.log(com)

const first = [1,2,3,4]
const second = [5,6,7,8]
const joined = first.concat(second)
// concatenates the first and second array to the joined array
console.log(joined)

console.log(joined.indexOf(5))
// returns the index of the specified element in the array
// returns -1 if the element is not present

const rep = [1,2,6,8,1,4,8,9,2]
let ind = rep.lastIndexOf(1)
// returns the index of the last occurence of the specified elenent
// returns -1 if element is not present

let str = rep.toString()
// converts the array to string
console.log(str)

let rep2 = rep.join('-')
console.log(rep2)
/* .join is used to specify the character or symbol with which the elements of the 
   array is to be seperated */
// by default it is comma

const sliced_arr = rep.slice(1,5)
// slices the array from index 1 to index 5 not incliding 5
console.log(sliced_arr)

const arr3 = [23,67,88,102,3,222]
// splice method takes 3 parameters
// starting index
// no. of times to be removes
// no. of items to be added

const spl_arr = arr3.splice(3,2,7,9) //this will contain the removed elements
console.log(spl_arr)

// here from index 1 it will remove 2 items and replace it with the numbers 7 and 9
console.log(arr3)

const arr4 = [1,2,3,4,5,6,7,8]
arr4.splice(2)
// if given only 1 element it will remove all the elements from the specified index
console.log(arr4)

// push and pop can be used to add and remove elements from the end of the array
const ar = [1,2,3,4,6]
ar.pop()
console.log(ar)
ar.push(5)
console.log(ar)

// unshift and shift can be used to add and remove elements from the beginning of array
ar.unshift(9)
console.log(ar)
ar.shift()
console.log(ar)

let ar1 = [6,1,45,90,36,78,102,55]
console.log(ar1.sort())
// sorts the array.
// elements will be sorted as if they were strings
// ie 36>102 since 3>1
// imagine alphabetic order sorting
console.log(ar.reverse()) // reverses the array