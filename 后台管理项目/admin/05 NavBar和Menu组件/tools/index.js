// 定义检验用户名的方法
export function CheckUsername(value) {
    // 用户名是2-8位数字 字母下划线
    if (!/^\w{2,8}$/.test(value)) {
        return '用户名是2-8位数字 字母下划线'
    }
}

// 校验密码的方法
export function CheckPassword(value) {
    // 包含字母和数字
    if (!/[a-z].*\d|\d.*[a-z]$/.test(value)) {
        return '包含字母和数字'
    }
}

// 内容不能为空 
export function notEmpty(data) {
    // 遍历对象
    for (let key in data) {
        if (data[key] === '' || data[key] === undefined) {
            return '内容不能为空'
        }
    }
}

// 内容都是合法的
export function invalid(errors) {
    // 遍历对象
    for (let key in errors) {
       if (errors[key]) {
            return '请检查用户名和密码'
       }
    }
}


// 暴露一个默认的接口
export default { CheckUsername,  CheckPassword, notEmpty, invalid } 



