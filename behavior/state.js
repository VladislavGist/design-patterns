// 

class Light {
    constructor(light) {
        this.light = light;
    }
}

class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return 'stop';
    }
}

class YellowLight extends Light {
    constructor() {
        super('yellow');
    }

    sign() {
        return 'attention';
    }
}

class GreenLight extends Light {
    constructor() {
        super('greed');
    }

    sign() {
        return 'run';
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new GreenLight(),
            new YellowLight(),
            new RedLight()
        ];
        this.current = this.states[0];
    }

    change() {
        const total = this.states.length;
        let index = this.states.findIndex(light => light === this.current);

        if (index + 1 < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    sign() {
        return this.current.sign();
    }
}

const trafic = new TrafficLight();

console.log(trafic.sign());

trafic.change();

console.log(trafic.sign());

trafic.change();

console.log(trafic.sign());