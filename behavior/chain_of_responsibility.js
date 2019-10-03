// Позволяет последовательно у одного и того же метода вызывать
// какой-то набор операций и последовательно их модифицировать

class MySum {
    constructor(initial = 42) {
        this.sum = initial;
    }

    add(value) {
        this.sum += value;
        return this
    }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(1).add(9).sum); // ==> 60

const sum2 = new MySum(0);
console.log(sum2.add(1).add(2).add(3).sum); // ==> 6