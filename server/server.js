const io = require('socket.io')(8000,{
    cors:{
        origin:'http://127.0.0.1:5173'
    }
})

let users = {}

io.on('connection',socket=>{
    socket.on('user-joined',name =>{
        users[socket.id] = name
        console.log(name)
    })
    socket.on('message',(message)=>{
        socket.broadcast.emit('send',message)
        // appendElement(message,'right')
    })
})