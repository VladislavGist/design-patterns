const car = {
    wheels: 4,
    owner: '',

    init() {
        console.log(`I have ${this.wheels} wheels, my owner is ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: 'Bill'
    }
});

carWithOwner.init()

console.log(carWithOwner.__proto__ === car);
