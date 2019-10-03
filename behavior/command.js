// Позволяет создавать абстрактную оболочку над функционалом,
// которая позволяет управлять через другой объект, записывая 
// состояние которые были вызваны(прим. Redux)

class MyMath {
    constructor(initialValue = 0) {
        this.num = initialValue;
    }

    square() {
        return this.num * 2;
    }

    cube() {
        return this.num * 3;
    }
}

class Comand {
    constructor(subject) {
        this.subject = subject;
        this.commandsExecuted = [];
    }

    execute(command) {
        this.commandsExecuted.push(command);
        return this.subject[command]();
    }
}

const x = new Comand(new MyMath(2));

console.log(x.execute('square'));
console.log(x.execute('cube'));
console.log(x.execute('cube'));
console.log(x.commandsExecuted);