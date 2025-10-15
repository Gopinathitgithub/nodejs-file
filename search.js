

  const fs=require('fs')
  const http = require('http')

const tra= http.createServer((req,res)=>{
 if(req.url==='/'&& req.method==='GET'){
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<head><h1> Gamer</h1></head>')
  res.write('<body>')
  res.write('<form action ="/message" method="POST">')
  res.write('<input type="text" name="message">')
  res.write('<button >sent</button>')
  res.write ( '</form>')
  res.write('</body>')
  res.write('</html>')//input body of the key in message 
  return res.end()
 }
if(req. url==='/message'&& req.method==='POST'){
  let body=''
req.on('data',chunk=>{ // -> step 1 :  html input name message id of object this actual return by input value request ul post pass data chunk one of bufer
                              // buffer indidual to space selcet or changing human understand   
  body+=chunk.toString();
})
req.on('end',()=>{  // all data client to has been received and processed
  const message = body.split('=') // body in string and also rewrite split using [1] this  

  fs.writeFile('./content/bigsteam.txt',message[1],'utf-8',(err)=>{
    if (err){
      console.log(err)
    }
    else{
      console.log('file written successfully')
    }
    res.setHeader('Location','/')
    res.statusCode=302
    return res.end() // fully end
  }) // 
   return 'mml'
  // 


})

}}).listen(8020,()=>{console.log('http://localhost:8020')})