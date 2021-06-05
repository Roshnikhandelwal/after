/* 
1)-module is a file, in nodojs every file is a module
2)module ka kam-code ko encapsulate krta h taki ye jo h code dusre code se clash/disturbe
ni hona chahiye,chahe to aap code ko export kr sktte to fir dusre modure m imort krna hota h
3)node js pure code ko iffe fuction me wrappe kr deta h
4)iffe function/imidiate invoke funcion in JS- jese define hote h vese hi
automatic call ho jata he 
        (function(exports,module,require,__dirname,__filename){  //nodejs run time pe pass krti h parameter
            const color = require('cli-color')
            var age = 25;
            console.log(name)
        })()
*/

//npm module
//const color = require('cli-color')//how to (import/load) module (nmp module /library)
//console.log(color.cyan("hello node js")) 

// local module     jo khud bnate h
// const auth = require('./auth.js')
// auth.register("hacker")
// auth.login("hacker",1334)

//core module
const path = require('path')
// console.log(path.dirname(__filename))
// console.log(__filename)
// console.log(path.basename(__filename))

// //extension
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))

//join
// console.log(path.join(__dirname,'order','app.js'))

//file system  we can 1-make directory  2-file create 3)data read and 4) write
const fs = require('fs')
// //1)
// fs.mkdir(path.join(__dirname,'/test'),(err)=>{
//     if (err){
//         console.log('something went wrong.....')
//         console.log(err)
        
//         return
//     }
//     console.log('folder created...')
// })
// //2-4)
// fs.writeFile(path.join(__dirname,'test','test.txt'),'hello js\n',(err)=>{
//     if(err){
//         throw err
//     }
//     fs.appendFile(path.join(__dirname,'test','test.txt'),' More data',(err)=>{
//         if (err){
//             throw err
//         }
//         console.log('data added....')
//     })
//     console.log('folder created....')
// })
//3
// fs.readFile(path.join(__dirname,'test','test.txt'),'utf-8',(err,data)=>{
//     if(err){
//         throw err
//     }
//     // const content=Buffer.from(data)
//     // console.log(content.toString())
//     console.log(data)
// })

//os module
// const os=require('os')
// console.log('type of os- ',os.type())
// console.log('plateform of os- ',os.platform())
// console.log('cpu architecture- ',os.arch())//cpu architecture
// console.log('cpu details- ',os.cpus())//cpu details
// console.log('free space- ',os.freemem())//free memory in  bytes
// console.log('total memory-- ',os.totalmem())
// console.log('Up time',os.uptime())//for surver monitoring application

//Events module
const Emitter=require('events')//emitter is a classs here class return ho rhi h
// const myEmitter = new Emitter()//create object of emitter class

// myEmitter.on('somename',(data)=>{
//     console.log(data)
// })
// myEmitter.emit('somename',{
//     name:'roshni'
// })

//reallife example

// class Auth extends Emitter{    //custome class
//     resgister(username){
//         console.log('Register successfully')
//         this.emit('registerd',username)
//     }
// } 
// //verify
// const auth =new Auth()
// auth.on('registerd',(data)=>{
//     console.log(`sending email to ${data}`)
// })
// //welcome
// auth.on('registerd',(data)=>{
//     console.log(`sending welcome email to ${data}`)
// })
// auth.resgister('Roshni')

