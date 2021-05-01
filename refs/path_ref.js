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