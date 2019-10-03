// Агрегируем схожие классы в один

class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.const = 50;
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name;
        this.const = 150;
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.const = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type];
        const member = new Membership(name);
        member.type = type;

        return member;
    }
}

const factory = new MemberFactory();

const members = [
    factory.create('Bill', 'simple'),
    factory.create('Mike', 'standart'),
    factory.create('John', 'premium'),
    factory.create('Petr'),
    factory.create('Rick', 'premium')
];

console.log(members)