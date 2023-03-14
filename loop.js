for(let i = 1; i <= 5; i++)
{
    console.log(`${i} * ${i} = ${i * i}`)
}

let i = 0
while (i <= 5) 
{
    console.log(i)
    i++
}
console.log("\n")

let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)
console.log("\n")


const numbers = [1,2,3,4,5,6,7,8,9]
for(const num of numbers)
{
    console.log(num**2)
}

const techs = ["html","css","javascript","react","node"]
for(const tech of techs)
{
    console.log(tech.toUpperCase())
}