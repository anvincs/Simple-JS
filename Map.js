// creating a map from an list(array)

countries = 
[
    ['India', 'New Delhi'],
    ['Australia', 'Canbera'],
    ['Japan', 'Tokyo'],
    ['Russia', 'Moscow'],
]
// key value pairs
const countryMap = new Map(countries)
console.log(countryMap)
console.log(countryMap.size)

// getting value from the map
console.log(countryMap.get('India'))

// checking if a key exists in the map
console.log(countryMap.has('Japan'))


// getting all values of the map through a loop

for (const country of countryMap)
{
    console.log(country)
}

for (const [country, capital] of countryMap){
    console.log(country, capital)
   }