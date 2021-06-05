/*http module*/
const http = require('http')
const fs = require('fs')
const path = require('path')
const { restart } = require('nodemon')

//server create server pe  jitni bhi request aati h yha se handel krenge
const app = http.createServer((req, res)=>{
    //console.log(req.url)
    //we can send response header whatever we want
    res.writeHead(200,{
        'content-Type':'text/html'
    })
    // if (req.url==='/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.end(content)
    //     })

    // }else if(req.url === '/about'){
    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.end(content)
    //     })
    // }
    let filepath = path.join(__dirname,'public',req.url === '/'?'index.html':req.url)
    
    let contenType='text/html'
    let ext = path.extname(filepath)
    if(!ext){
        filepath+= '.html'
    }
    switch(ext){
        case '.css':
            contenType='text/css'
            break
        case '.js':
            contenType='text/javascript'
            break
        default:
            contenType='text/html'

    }


    fs.readFile(filepath,(err,content)=>{
        if(err){
            fs.readFile(path.join(__dirname,'public','error.html'),(err,data)=>{
                if (err){
                    res.writeHead(500)
                    res.end('Error!!!')
                }else{
                    res.writeHead(404,{            //if we couldnt find file then we get status 404
                        'Content-Type': contenType
                    })
                    res.end(data)
                }
                
            })
        }else {
            res.writeHead(200,{
                'Content-Type':contenType
            })
            res.end(content)
        }
    })
   
    
})
//port 3000 might not available on the server always,jb app deploy krte h server p
//deploy  krne pe .env file hoti he jha hum env varible rkhte he 
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{                   ///server on rkhne  ke liye
    console.log(`Listening on  port ${PORT}`)
})

