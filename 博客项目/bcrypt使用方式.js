const bcrypt = require('bcrypt')
async function run() {
    //生成随机数
    //gensalt方法接受一个数值作为参数
    //默认值为10
    //数值越大  密码复杂程度越高
    //数值越小  密码复杂程度越低
    //返回一个随机字符串
    const salt = await bcrypt.genSalt(10)
    const result = await bcrypt.hash('12345', salt)
    console.log(salt);
    console.log(result);
}
run()
