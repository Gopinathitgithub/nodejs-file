``
//const {readFileSync,writeFileSync} = require('fs') 



//const readfile = readFileSync('./content/test.txt','utf8') // format store utf8 is the store by text file 


 //const writefile = writeFileSync('./content/test-sync.txt',`${readfile}:  hi their gopinath i had to learn from node js fundamental concept  became is learning stuff are boring `,{flag: 'a'}) // rewrite concept of text sync 



//console.log(writefile) //'this are actual connect withe folder subrator' 

const {readfile,writefile}= require('fs')

console.log('start')

readfile('./subrator/subject.txt','utf8',(err,result)=>{
if(err){
    console.log(err)
    return
}
const frist=result
readfile('./subrator/subject.txt','utf8',(err,result)=>{
if(err){
    console.log(err)
    return
}
const secnd=result

writefile('./subrator/subject-sync.txt','utf8',`heror ${frist} ${secnd}`,
(err,result)=>{
    
if(err){
    console.log(err)
    return
}
console.log('done of the value')
})
})
})
console.log("thinck") 