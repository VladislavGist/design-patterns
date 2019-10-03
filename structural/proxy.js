// Позволяет ствить ловушки (на поля объектов, вызов функции) что позволяет 
// гибко определять работу приложения
// (избавление лишних запросов на сервер)

function netFetch(url) {
    return `${url} - Response from server`;
}

const cache = new Set();

const proxiedFetch = new Proxy(netFetch, {
    apply(target, thisArg, args) {
        const url = args[0];

        if (cache.has(url)) return `${url} - Response from cache`
        cache.add(url)
        return Reflect.apply(target, thisArg, args)
    }
});

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));