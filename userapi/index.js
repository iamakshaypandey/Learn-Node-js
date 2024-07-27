const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('hello home page are render')
    }else if(req.url=='/userapi'){
        fs.readFile(`${__dirname}/on.json`,'utf-8',(err,data)=>{
            const obj = JSON.parse(data)
            // res.end(data)
            obj.map(x=>res.end(`<h1></h1>`))
        })
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error pages . page is not found</h1>")
    }
})

server.listen(3000,'127.0.0.1',()=>{
    console.log('server 3000 port are working');
})