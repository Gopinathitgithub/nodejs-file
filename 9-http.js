const http = require('http')

const server = http.createServer((req,res)=>{ // http request sent to server from localserver  request mean throught 
// http format sent the particular follow
    if(req.url==='/'){ //  http format of the follow order 
        res.end('page fint') // acessing url is the respose value end of in the page
        return
    }
    if(req.url==='/about'){
        res.end('about')
        return
    }
    res.end(`<h1>Oops!<h1>
       <p> this truth find page</p>'
       <a href ="/">back page</a>`
)
 
})
server.listen(8083,()=>{
    console.log("http://localhost:80801")// this important port is als0 unique id http id of serial number localhost your have pc localhost   
}) 