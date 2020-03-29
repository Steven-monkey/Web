const rf = require('fs')
// console.log(rf);

rf.readFile = ('./demo.txt', 'utf-8', (err, data) => {
    console.log(err);
    console.log(data);
})
