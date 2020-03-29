const rf = require('fs')
// console.log(rf);

rf.readFile('./01  感受node.js', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
})
