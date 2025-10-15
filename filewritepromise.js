
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



//prom
const {readFile}= require('fs')//(File System) module. readFile is used for asynchronously reading file contents.


const startfile =(path)=>{ 
   return new Promise((resolve,reject) =>{   // arrow function call readfile is txt visual create
    readFile(path,'utf8',(err,data)=>{ //will pass the path 'utf8 ' encouting specfic to content read to as string
    if(err){
        resolve(err) // err to placeholder to in maintain value
    }else{
        reject(data)
    }
    }///
)

})}

const table = async()=>{ //This defines an async function named trang. async functions allow the use of await to 
                            //  pause execution until a Promise settles (either resolves or rejects).
   try{ 
    const first = await startfile('./content/result-sync.txt') // actually passing excution will do is pause then excution in wait on return (resolve,reject)
    const second = await startfile('./content/subrator/subject.txt') 
    console.log(first,second)
   }catch(err){
    console.log(err)
   }
}
table()

//startfile('./content/result-sync.txt').then((result)=>{console.log(result)}).catch((err)=>console.log(err))




const {readFile,writeFile}= require('fs').promises//(File System) module. readFile is used for asynchronously reading file contents.
const util = require('util')
//const readpromise =util.promisify(readFile)
//const writepromise =util.promisify(writeFile)//fs.writeFile(path, data, options, callback) 
//path → where to write the file

//data → what to write into the file

//options → encoding (utf8 etc.), mode, flag (optional)

//callback → function (error) (when not promisified)
function value(Name,id){
            
   console.log(`the are verfiy authozication ${Name}${id}`)
}


const trang = async()=>{ //This defines an async function named trang. async functions allow the use of await to 
                            //  pause execution until a Promise settles (either resolves or rejects).
   try{ 
    const first = await readFile('./content/result-sync.txt','utf8') // actually passing excution will do is pause then excution in wait on return (resolve,reject)
    const second = await readFile ('./content/subrator/subject.txt','utf8') 
    await writeFile('./content/subrator/retra_sync.txt',` This is Assome:${first}${second}`,'utf8')
   console.log(first,second)
  
   }catch(err){
    console.log(err)
   }
}
trang()

//startfile('./content/result-sync.txt').then((result)=>{console.log(result)}).catch((err)=>console.log(err))