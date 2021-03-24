const button = document.getElementById('button');
const toasts = document.getElementById('toasts');


const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
];

button.addEventListener('click', () => createNotificaton('This is invalid data'));

function createNotificaton(message = null, type = null) {
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : 'error')

    notif.innerText = message ? message : getRandomMessage();

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove();
    }, 3000)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)];
}