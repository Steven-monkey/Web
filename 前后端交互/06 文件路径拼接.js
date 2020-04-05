const fs = require('fs')
const path = require('path')
console.log(__dirname);
console.log(path.join(__dirname, './01  感受node.js'));
fs.readFile(path.join(__dirname, './01  感受node.js'), 'utf8', (err, data) => {
    console.log(err);
    console.log(data);
})