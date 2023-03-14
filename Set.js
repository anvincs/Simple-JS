//  Set is a collection of elements.
// Set can only contains unique elements.

// creating an empty set
const demo = new Set()
console.log(demo)
console.log(demo.size)


const companies = ['Google','Apple','Microsoft','Meta']
const companySet = new Set(companies)  //creating set from list
companySet.add('Amazon')
companySet.add('Twitter')  // adding elements into the set
companySet.add('Oracle')
// set is an iterable object
for(const comp of companySet)
{
    console.log(comp)
}

console.log(companySet)
console.log(companySet.delete('Amazon'))
// returns true if deletion successful
// returns false if element not found

console.log(companySet.has('Apple'))
// returns true if the specified element is in the set
// else returns false


// union of two sets   (A U B)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)


// intersection of two sets  (P ∩ Q)

let p = [1, 2, 3, 4, 5]
let q = [3, 4, 5, 6]

let P = new Set(p)
let Q = new Set(q)

let r = a.filter((num) => B.has(num))
let R = new Set(r)

console.log(R)

// difference of two sets  (X-Y)

let x = [1, 2, 3, 4, 5]
let y = [3, 4, 5, 6]

let X = new Set(x)
let Y = new Set(y)

let z = a.filter((num) => !B.has(num))
let Z = new Set(z)

console.log(Z)

Z.clear();  // clearing a set
console.log(Z)