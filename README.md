# Codefract
Codefract is a cuttind edge library designed to make writng JavaScript **easier** everyday.
> Codefract for JavaScript developers!

## Installation
`npm install codefract`

## Examples
Here are some descriptions for Codefract's capabilities. 

```js
const cf = require('codefract')

// loop through a range of integers
for (num of cf.range(0, 10, 2)) {
  console.log(num)
}

const numbers = cf.range(0, 10, 1)
const sus = cf.range(0, 42) // defaults to (0, 42, 1)

// copies odd values from 1 to 10 in numbers
const copy = cf.copy(numbers, [ 1, 10, 2 ])
const stillWorks = cf.copy(numbers, [ 1, 10 ])
console.log(copy)
console.log(stillWorks)

// Array with duplicate values
const websites = [ 'discord', 'facebook', 'discord', 'reddit', 'github', 'github', 'discord' ]

// Array without duplicate values
const simplified = cf.simplify(websites)

// Map of how many times each item appears
const counts = cf.frequency(websites)

console.log(simplified)
console.log(counts)

// Sorts an array
console.log(cf.sort([ 42, 21, 69 ]))

// Create all possible strings with length 2 using the default charset 
cf.stringer(2, (string) => {
  console.log(string)
})

// Get all possible hexadecimals
cf.stringer(6, (string) => {
  console.log(string)
}, '0123456789ABCDEF')
```