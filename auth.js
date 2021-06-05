//node js- pure code ko iffe function me wrappe kr deta he
const register = function(username){

    console.log(`User ${username} has been registered`) //back ticks template string join variable and string
}

const login = function(username,password){

    console.log(`User ${username} is logged in`)
}
// code wrappe he to manually export krna hoga
//module.exports = register //2 fuction ki export krna h to we will use object

module.exports={
    register: register,
    login: login
}

 