const os = require('os') // server accesing with pc sent  to server
const info = os.userInfo()  
console.log(info)

console.log(`the system uptime ${os.uptime}`)

const previOs={
    name:os.type(),  // windows 
    release:os.release(), // os version
    totalmem:os.totalmem(), // pc total memery
    freemem:os.freemem() // pc free memery
}

console.log(previOs)