// Разработка сервера
const http = require('http')
const path = require('path')
const fs = require('fs') // file system

// Сервер(Server). Данная переменна, будет являтся результатом фугкции http.createServer
const server = http.createServer((req, res) => {
    // Если метод GET
    if (req.method === 'GET') {
        // res(ответ) - 1 параметр = статус(200)
        // 2 параметр = header(страницы), устанавливаем тип страницы
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        // В ответе end, выводим форму на страницу
        // res.end(`
        //     <h1>Form</h1>
        //     <form method="post" action="/">
        //         <input name="title" type="text">
        //         <button type="submit">Send</button>
        //     </form>
        // `)

        // Проверяем, на какой url был запрос
        if (req.url === '/') {
            // Модулем fs и path, прописываем путь до файла, указываем кодировку и выводим на страницу контетн
            fs.readFile(path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, content) => {
                  // Если есть ошибка обрабатываем ее
                  if (err) {
                      throw err
                  }
                  // Ответ, выводим на страницу контент
                  res.end(content)
                }
            )
        // Аналогично певому, только проверяем запрос на страницу about
        } else if (req.url === '/about') {
            fs.readFile(path.join(__dirname, 'views', 'about.html'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        throw err
                    }
                    res.end(content)
                }
            )
        } else if (req.url === '/api/users') {
            res.writeHead(200, {
                'Content-type': 'text/json'
            })

            const users = [
                {name: 'Sergey', age: 25},
                {name: 'Angel', age: 24}
            ]

            res.end(JSON.stringify(users))
        }

    // Если метод post
    } else if (req.method === 'POST') {
        // Создаем новый массив body
        const body = []

        // Приписываем новое тело ответа со статусом 200 и с новым типом контента, так-же прописываем кодировку
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        // Event emitter, обрабатываем событие data, так как работаем с методом post
        req.on('data', data => {
            // В конец массива body, помещаем полученный ответ в формате буфера
            body.push(Buffer.from(data))
        })

        // Новый Event emitter, обрабатываем конец запроса метода post
        req.on('end', () => {
            // В переменную message, помещаем в читаемом видео то, что было переданно в переменную body в буферном типе
            // Так-же разделяем по знаку = и начинаем со 2 элемента
            const message = body.toString().split('=')[1]

            // Выводим сообщение на страницу с полученными данными из формы
            res.end(`
                <h1>Ваше сообщение: ${message}</h1>
            `)
        })
    }
})

// Асинхронная функция для запуска сервера
async function start() {
    // Ожиыдаем запуска серваера на порту 3000
    await server.listen(3000, () => {
        // Если ошибок нет, выводим сообщение в консоль с портом и ссылкой на приложение
        try {
            console.log(`Server has been started on port http://localhost:3000`)
        }
        // Обрабатываем ошибки
        catch (e) {
            console.error('Error', e)
        }
    })
}

// Вызов асинхронной фугкции с запуском сервера
start()
