const io = require('socket.io')(8000,{
    cors:{
        origin:'http://127.0.0.1:5173'
    }
})

let users = {}

io.on('connection',socket=>{
    socket.on('user-joined',name =>{
        users[socket.id] = name
    })
    socket.on('message',(value)=>{
        // console.log(value.message)
        socket.broadcast.emit('send',[value.message,value.name])
        // appendElement(message,'right')
    })
})