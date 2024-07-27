
const EventEmiter = require('events')

const event = new EventEmiter()

event.on('sayHello',(q,b)=>{
    console.log('hello akshay',q,b);
})

event.emit('sayHello',200,'ok')