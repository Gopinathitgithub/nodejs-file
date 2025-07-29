const data = require('./semi')
const { dname, tname } = require('./5-unit');
const singledom = require('./6-template')


console.log(data('john'))

console.log(data(dname)); // Output: doormon
console.log(data(tname)); // Output: teen
console.log(singledom)

