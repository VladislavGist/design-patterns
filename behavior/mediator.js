// Позволяет выстраивать тесную коммуникацию между ралличными объектами разного типа.
// Предоставляет централизованную абстракцию, которая позвляет взаимодействовать
// группе объектов через друг друга

class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }
    
    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            })
        }
    }
}

const vla = new User('Vla');
const lena = new User('Lena');
const igor = new User('Igor');

const room = new ChatRoom();
room.register(vla);
room.register(lena);
room.register(igor);

vla.send('Hello', lena);
lena.send('Hi hi', vla);
igor.send('Hi everywere');