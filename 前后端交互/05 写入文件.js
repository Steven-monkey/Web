var wf = require('fs')
wf.writeFile('./demo.txt', '要写入的文件', (err, doc) => {
    if (err != null) {
        console.log(err);
    } else {
        console.log("文件写入成功");
    }
})