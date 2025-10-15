 const {writeFileSync}=require('fs')

 for(let i=0;i<10000;i++){
    writeFileSync('./content/bigsteam.txt',`hello world${i}`,'utf8')
 }