const socket = io('http://localhost:8000');

socket.emit('connection')

let name = prompt("Enter name")
socket.emit('user-joined',name)

let messageElement = document.getElementById('message')
document.getElementById('submit').addEventListener('click', () => {
    let message = messageElement.value;
    // console.log(value)
    socket.emit('message', message)
    appendElement(message,'right')
})

socket.on('send',message =>{
    appendElement(message,'left');
})

function appendElement(message,position) {
   let el = document.createElement('p');
   el.setAttribute('class',`bg-green-400 mx-12 w-48 text-gray-800 p-2 rounded-lg my-2 float-${position} clear-both`)
   el.innerText = message;
   document.getElementById('element').append(el)
}
