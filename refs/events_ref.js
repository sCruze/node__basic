// Создаем переменную с модулем events
const EventEmitter = require('events')

// Создаем новый экземпляр класса Logger и наследуем все от EventEmitter
class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Date.now()}`)
    }
}

// Создаем новый экземпляр класса
const logger = new Logger()

// Вызываем метод on и передаем ему аргументы
// 1 аргумент - газвание события
// 2 аргумент - callback function с данными, с которыми потом можно работать
logger.on('message', data => {
    // Выводим в консоль data - там будут данные с
    console.log(data)
})


logger.log('Hello')
logger.log('Hello')
logger.log('Hello')
