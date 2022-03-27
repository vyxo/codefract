const cf = require('./codefract')

// loop through a range of integers
for (num of cf.range(0, 10, 2)) {
  console.log(num)
}

const numbers = cf.range(0, 10, 1)
const sus = cf.range(0, 42) // defaults to (0, 42, 1)

// copies odd values from 1 to 10 in numbers
const copy = cf.copy(numbers, [1, 10, 2])
const stillWorks = cf.copy(numbers, [1, 10])
console.log(copy, stillWorks)

const websites = ['discord', 'facebook', 'discord', 'reddit', 'github', 'github', 'discord']
const simplified = cf.simplify(websites)
const counts = cf.frequency(websites)
console.log(simplified, counts)

// create all possible strings with length 2 using the default charset <numbers and letters>
/*
cf.stringer(2, (string) => {
  console.log(string)
})
*/
// get all possible hexadecimals
/*
cf.stringer(6, (string) => {
  console.log(string)
}, '0123456789ABCDEF')
*/