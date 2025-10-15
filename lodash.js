     const _ = require('lodash');

    const nestedArray = [1, [2, [9, [6]]]];
    const flattenedArray = _.flattenDeep(nestedArray);
 const time= new Date(). toUTCString()
    const range = flattenedArray.map((value)=>{return value})
    console.log(time)

    console.log(range)
    console.log(flattenedArray);
    // Output: [1, 2, 3, 4]
    