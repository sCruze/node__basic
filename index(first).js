// Разработка сервера
const http = require('http')

// Сервер(Server). Данная переменна, будет являтся результатом фугкции http.createServer
const server = http.createServer((req, res) => {
    // Обрабатываем запрос и смотрим какой url найден
    console.log(req.url)

    // Выводим сообщение на страницу
    res.write('<h1>Hello, my name is node!</h1>')
    res.write('<h2>Hello, my name is node!</h2>')
    res.write('<h3>Hello, my name is node!</h3>')
    res.end(`
        <div style="background: red; width: 200px; height: 200px;">
            <h1>Test</h1>
        </div>
    `)

})

// Асинхронная функция для запуска сервера
async function start() {
    await server.listen(3000, () => {
        try {
            console.log(`Server has been started on port http://localhost:3000`)
        }
        catch (e) {
            console.error('Error', e)
        }
    })
}

start()

