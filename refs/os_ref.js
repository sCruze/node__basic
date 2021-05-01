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