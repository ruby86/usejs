// использование одноуровневого литерала
var server = {
    host: "127.0.0.1",
    user: "root",
    password: "123"
};

// вывод в консоль
console.log(server["host"], 
            server["user"], 
            server["password"],
           "одноуровневый литерал");

//добавление многоуровнего литерала
var server = {
        ip: "127.0.0.1",
    host: {
        user: "root",
        password: "123"
    }
};

// вывод в консоль
console.log(server.ip,
            server.host.user,
            server.host.password,
            "многоуровневый литерал"
        );

//создаём ссылку и передаём по ней объект
var urlka = server
console.log(urlka.ip,
            urlka.host.user,
            urlka.host.password,
            "urlka стала ссылкой на объект server"
        );