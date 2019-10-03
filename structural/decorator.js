// С помощью него имеем возможность добавлять поведение
// или функционал для существующих классов

class Server {
    constructor(ip, port) {
        this._ip = ip;
        this._port = port;
    }

    get url() {
        return `htttps://${this.ip}:${this.port}`;
    }
}

// decorator
function aws(server) {
    server.isAWS = true;
    server.awsInfo = function() {
        return server.url;
    }

    return server;
}

// decorator
function azure(server) {
    server.isAzure = true;
    server.azureInfo = function() {
        return server.url;
    }

    return server;
}

const s1 = aws(new Server('12.12.12.12', 8080));
const s2 = azure(new Server('13.13.13.13', 9000))

console.log(s1);
console.log(s2);