// observer, listener, dispatcher

// Формирует зависимости один ко многим.

// Есть объект у которого мы можем затрегирить вызов изменений
// и дальше все другие объекты, которые были подписаны на эти изменения,
// получают эти обновления и выполняют свой функционал

class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unSubscribe(observer) {
        this.observers.filter(item => item !== observer)
    }

    fire(changes) {
        this.observers.forEach(observer => {
            observer.update(changes);
        });
    }
}

class Observer {
    constructor(state = 1) {
        this.state = state;
        this.initialState = state;
    }

    update(action) {
        switch(action.type) {
            case 'INCREMENT':
                this.state = ++this.state;
                break;
            case 'DECREMENT':
                this.state = --this.state;
                break;
            case 'ADD':
                this.state += action.payload;
                break;
            default: this.state = this.initialState;
        }
    }
}

const stream$ = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(42);

stream$.subscribe(obs1);
stream$.subscribe(obs2);

stream$.fire({type: 'INCREMENT'});
stream$.fire({type: 'INCREMENT'});
stream$.fire({type: 'INCREMENT'});
stream$.fire({type: 'DECREMENT'});
stream$.fire({type: 'ADD', payload: 10});


console.log(obs1.state);
console.log(obs2.state);