// importing
import React from 'react'
import defaultExportimport, { namedExport, namedExport2 } from './exporting'

console.log(defaultExportimport, namedExport, namedExport2)

// Deconstructing
const foo = {
    name: 'John Doe',
    height: 5,
    age: 24,
}

const bar = {
    name: 'John Doe',
    height: 5,
    age: 24,
}

const { name, age } = foo
console.log(name) // John Doe
console.log(age) // 24

const bar = [1, 2, 3, 4, 5, 6]
const [value1, value2] = bar
console.log(value1) // 1
console.log(value2) // 2

// filter, map, reduce - these functions do not mutate the original array
const arr = [1, 2, 3, 4]

arr.filter(item => item % 2 === 0) // returns [2, 4]
arr.map(item => item * 2) // returns [2, 4, 6, 8]
arr.reduce((previousValue, item) => previousValue + item, 0) // returns 10
