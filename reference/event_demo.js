   const EventEmitter = require('events')

   //create class

   class MyEmitter extends EventEmitter{}


   // init object

const myEmiiter = new MyEmitter();

myEmiiter.on('event', ()=> console.log('event fired'))

//init event
myEmiiter.emit('event');