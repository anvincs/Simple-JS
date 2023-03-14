const person = 
{
    firstName: 'Anvin',
    lastName: 'Shaju',
    age: 20,
    country: 'India',
    city: 'Thrissur',
    skills: 
    [
      'HTML',
      'CSS',
      'JavaScript',
      'Python',
      'C',
      'C++',
      'Java'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    }
}
  
console.log(person.getFullName())
const keys = Object.keys(person)
console.log(keys)
person.currentProfession = 'Student' // added a new key
console.log(Object.keys(person))

const entries = Object.entries(person)
// to get keys and values as an array
console.log(entries)

console.log(person.hasOwnProperty('firstName'))
console.log(person.hasOwnProperty('score'))
// checks whether the object has the specified property(key)