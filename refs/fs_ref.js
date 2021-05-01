const path = require('path')

// модуль FS - File System
// Чтобы создать папку
// Работа с модулем fs
const fs = require('fs')

// Передаем параметры, где будет создаваться файл и его имя, далее callback function с 1 аргументом err
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     // Проверяем, есть ли ошибки
//     if (err) throw new Error(err)
//
//     // В консоль выдаем сообщение об успешном создании папки
//     console.log('Папка была создана')
// })

// Создаем файл в папке notes
// 1 аргумент - путь и название файла
// 2 аргумент - контент, который будет записан в файл
// 3 аргумет - обработка ошибок и вывод сообщения, callback function
// fs.writeFile(
//     path.join(__dirname, 'notes', 'notes.txt'),
//     'Hello node',
//     err => {
//         // Проверка на ошибки
//         if (err) throw new Error(err)
//
//         // Вывод сообщения
//         console.log('Файл успешно создан!')
//
//         // Данным методом, обновляем контент файла
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'notes.txt'),
//             ' From append file',
//             err => {
//                 // Проверка на ошибки
//                 if (err) throw new Error(err)
//
//                 // Сообщение
//                 console.log('Файл был изменен!')
//
//                 // Прочтение файла
//                 // В данном методе, в 2 аршумент мы передаем кодировку,
//                 // а в 3 в callback function 2 аргумента, 1 с ошибкой, 2 с контентом
//                 fs.readFile(
//                     path.join(__dirname, 'notes', 'notes.txt'),
//                     'utf-8',
//                     (err, data) => {
//                         // Проверка на ошибки
//                         if (err) throw new Error(err)
//
//                         // Сообщение с контентом файла
//                         console.log(data)
//                         // console.log(Buffer.from(data).toString())
//                     }
//                 )
//             }
//         )
//     }
// )
