     const _ = require('lodash');

    const nestedArray = [1, [2, [3, [4]]]];
    const flattenedArray = _.flattenDeep(nestedArray);

    console.log(flattenedArray);
    // Output: [1, 2, 3, 4]
    