// Определяет структуру, а дочерний реализует конкретный функционал. Не изм. поведение базового класса

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} working ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} имеет ЗП ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'precess creation program';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'precess testing program';
    }
}

const dev = new Developer('Vla', 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Developer('Mike', 90000);
console.log(tester.getPaid());
console.log(tester.work());