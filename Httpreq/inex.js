const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end('hello from the other')
    }else if(req.url=="/ubout"){
        res.end('hello from the ubout')
    }else if(req.url=='/contct'){
        res.end('hello from the contct')
    }else{
        res.end('<h1>404 error pge</h1>')
    }

})
server.listen(3000,'127.0.0.1',()=>{
    console.log('connecte 3000 port');
})