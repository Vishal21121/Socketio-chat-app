const socket = io('http://localhost:8000');

socket.emit('connection')

let name = prompt("Enter name")
document.getElementById('name').innerText = name

socket.emit('user-joined',name)

let messageElement = document.getElementById('message')
document.getElementById('submit').addEventListener('click', () => {
    let message = messageElement.value;
    messageElement.value = ''
    socket.emit('message', {message,name})
    appendElement(message,name,'green','right')
})

socket.on('send',(value) =>{
    appendElement(value[0],value[1],'green','left');
})

function appendElement(message,user,color,position) {
    let div = document.createElement('div');
   let el = document.createElement('p');
   let el1 = document.createElement('p');
   div.setAttribute('class',`bg-${color}-400 mx-12 w-48 text-gray-800 p-2 rounded-lg my-2 float-${position} clear-both`)
   el.innerText = message;
   el1.innerText = user;
   div.append(el1);
   div.append(el);
   document.getElementById('element').append(div)
}
