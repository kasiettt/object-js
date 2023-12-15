/*let user ={
    name: "Vasya",
    age: 25,
    hasCar: true,
    skills: {
        html: "good",
        css: "excellent",
        js: "beginner",
    },
}; */

/*document.write(user.skills.html);
//document.write("name" in user); проверяет есть ли в объекте ключ

for (let key in user) {     //показывает все ключи содержащиеся в объекте
    document.write(`${key}: ${user[key]} <br>`);
}

for (let key in user) {             //показывает все объекты содержащиеся в объекте
    if (typeof user[key] ==="object") {
        for (let subkey in user[key]) {
            document.write(`${subkey}: ${user[key][subkey]}<br>`)
        }
    } else {
        document.write(`${key}: ${user[key]}<br>`);
    }
}*/


/*let userName = user.name;     //при помощи этого можем вывести только значение одного ключа
document.write(userName);*/

/*деструктуризация
let {name, age} = user;
document.write(age);*/

//JSON; 

//let userJson =JSON.stringify(user);  //отправить жейсон файл бэкенд разработчикам
//document.write(user.Json);

/*как открыть жейсон файл который отправили бэкенд разработчики
let objFromJson = JSON.parse(userJson);
 for (let key in objFromJson) {
    document.write(`${key}: ${objFromJson[key]} <br>`);
 }*/

let user = [
    {
        title: "<h3>Недоросль</h3>",
        author: "<p>Денис Фонвизин</p>"
    },
    {
        title: "<h3>Бедная Лиза</h3>",
        author: "<p>Николай Карамзин</p>"  
    },
    {
        title: "<h3>Горе от ума</h3>",
        author: "<p>Александр Грибоедов</p>"   
    },
    {
        title: "<h3>Евгений Онегин</h3>",
        author: "<p>Александр Пушкин</p>"   
    },
    {
        title: "<h3>Борис Годунов</h3>",
        author: "<p>Александр Пушкин</p>"  
    },
    {
        title: "<h3>Повести Белкина</h3>",
        author: "<p>Александр Пушкин</p>" 
    },
    {
        title: "<h3>Маленькие трагедии</h3>",
        author: "<p>Александр Пушкин</p>"
    },
    {
        title: "<h3>Медный всадник</h3>",
        author: "<p>Александр Пушкин</p>"
    },
    {
        title: "<h3>Пиковая дама</h3>",
        author: "<p>Александр Пушкин</p>" 
    },
    {
        title: "<h3>Капитанская дочка</h3>",
        author: "<p>Александр Пушкин</p>" 
    },
    {
        title: "<h3>Герой нашего времени</h3>",
        author: "<p>Михаил Лермонтов</p>"  
    }

]

for (let key in user) {             //показывает все объекты содержащиеся в объекте
    if (typeof user[key] ==="object") {
        for (let subkey in user[key]) {
            document.write(`${subkey}: ${user[key][subkey]}<br>`)
        }
    } else {
        document.write(`${key}: ${user[key]}<br>`);
    }
}

