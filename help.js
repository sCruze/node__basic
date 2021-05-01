// Узнаем абсолютынй путь до места в котором была вызвана данная команда
console.log(__dirname)

// Выведет абсолютный путь файла, но уже с названием файла, в котором запущенн данный модуль
console.log(__filename)

// Модули
// Модуль PATH
const path = require('path')

// Узнаем название файла, в котором ведем разработку
console.log(path.basename(__filename))

// Узнаем в какой папке находится данный файл
console.log(path.dirname(__filename))

// Определяем расширение файла
console.log(path.extname(__filename))

// Работа с путями и названием файлов, как с объектом
// Видим все возможности path
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)

// Генерирование определенного пути
// Данный метод, позволяет соединить определенные строки в один путь
console.log(path.join(__dirname, '..', 'nameFile.ext')) // Переходим на уровень выше по каталогу
console.log(path.join(__dirname, 'test', 'nameFile.ext')) // Переходим в папку test

// resolve - позволяет создать корректный путь
console.log(path.resolve(__dirname, 'test', 'fileName.ext'))
console.log(path.resolve(__dirname, './test', 'fileName.ext'))

// Если поствить / то метод выведет абсолютный путь до файла, тоесть /fileName.ext
console.log(path.resolve(__dirname, './test', '/fileName.ext'))

// модуль FS - File System
const fs = require('fs')
// Чтобы создать папку
// Работа с модулем fs
const fs = require('fs')

// Передаем параметры, где будет создаваться файл и его имя, далее callback function с 1 аргументом err
fs.mkdir(path.join(__dirname, 'notes'), err => {
    // Проверяем, есть ли ошибки
    if (err) throw new Error(err)

    // В консоль выдаем сообщение об успешном создании папки
    console.log('Папка была создана')
})

// Создаем файл в папке notes
// 1 аргумент - путь и название файла
// 2 аргумент - контент, который будет записан в файл
// 3 аргумет - обработка ошибок и вывод сообщения, callback function
fs.writeFile(
    path.join(__dirname, 'notes', 'notes.txt'),
    'Hello node',
    err => {
        // Проверка на ошибки
        if (err) throw new Error(err)

        // Вывод сообщения
        console.log('Файл успешно создан!')

        // Данным методом, обновляем контент файла
        fs.appendFile(
            path.join(__dirname, 'notes', 'notes.txt'),
            ' From append file',
            err => {
                // Проверка на ошибки
                if (err) throw new Error(err)

                // Сообщение
                console.log('Файл был изменен!')

                // Прочтение файла
                // В данном методе, в 2 аршумент мы передаем кодировку,
                // а в 3 в callback function 2 аргумента, 1 с ошибкой, 2 с контентом
                fs.readFile(
                    path.join(__dirname, 'notes', 'notes.txt'),
                    'utf-8',
                    (err, data) => {
                        // Проверка на ошибки
                        if (err) throw new Error(err)

                        // Сообщение с контентом файла
                        console.log(data)
                        // console.log(Buffer.from(data).toString())
                    }
                )
            }
        )
    }
)

// Переименование файла
// 2 аргументом передается новое название файла
fs.rename(
    path.join(__dirname, 'notes', 'notes.txt'),
    path.join(__dirname, 'notes', 'mynotes.txt'),
    err => {
        if (err) throw new Error(err)

        console.log('Файл переименован')
    }
)

// Модуль OS
const os = require('os')

// Вызываем метод, который выдает информацию об операционной системе
console.log(os.platform())

// Архитектура процессора
console.log(os.arch())

// Информация о процессоре
console.log(os.cpus())

// Свободная память
console.log(os.freemem())

// Сколько всего памяти есть
console.log(os.totalmem())

// Какая корневая директория на пк
console.log(os.homedir())

// Сколько времени система работает
console.log(os.uptime())

// EVENTS


// Название файла с экспортируемым объектом user.js
const User = {
    name: 'Sergey',
    age: 24
}

// Этот объект мы не экспортировали, поэтому он является приватным
const User2 = {
    name: 'Cor'
}

// Экспортируем объект
// module.exports = User
module.exports = {
    user: User,
    sayHello() {
        console.log('Hello')
    }
}


// Чтобы подключить данный объект в другом файле, прописывает require
const user = require('./user.js')
console.log(user.user)
user.sayHello()

// HTTP

