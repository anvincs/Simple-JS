const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
products.sort()
console.log(products)


const nums = [12,2,45,189,23,77]
console.log(nums.sort())
// this will give a wrong answer
// sort converts items into string and sort those strings
// therefore in above example 189 will come before 2


//   to sort numbers

const nums2 = [23,456,89,10,2]
nums2.sort(function(a,b){
    return a-b
})
// sorts array in ascending order
console.log(nums2)

nums2.sort(function(a,b){
    return b-a
})
// sorts array in descending order
console.log(nums2)