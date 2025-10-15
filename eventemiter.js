// get back to class 
// if want custom extend from class
// otherwise is need emitting custom made to create instame
const event = require('events')

const newevent = new event

newevent.on('response',(name,tid)=>{console.log(`welcome back first : ${name,tid}`)})// subcribe to it / listen to it / respond to it 

newevent.emit('response','prince',33) // to emitted and give response on itself

// event  is  brower javascript  user click a button event to happing that mean in programming to has control to also call
//event-driven  prepossing to can be excuted 

//used by heavily node.js their are possible yes halfcourse is eventdriven responsse to as listening to resopse emit that mean put an what should do

newevent.on ('request',(data)=>{
    console.log('the is request')  //on is incomming the data client
})
newevent.emit('request')

// event is also knew  called by request