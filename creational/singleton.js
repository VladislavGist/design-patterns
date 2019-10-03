// Создает единый экземпляр класса

class DB {
    constructor(data) {
        if (DB.exists) return DB.instance

        DB.instance = this;
        DB.exists = true;
        this.data = data;
    }
    
    getData() {
        return this.data;
    }
}

const mongo = new DB('MongoDB');

console.log(mongo.getData()); // ==> MongoDB

const mysql = new DB('MySQL');

console.log(mysql.getData()); // ==> MongoDB
