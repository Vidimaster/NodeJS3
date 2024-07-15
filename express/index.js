const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'counter1.json')

console.log('Запрос получен');
const data = fs.readFileSync(filePath)
const dataJSON = JSON.parse(data);
app.get('/', (req, res) => {
    dataJSON.counter_main += 1;
    fs.writeFileSync(filePath, JSON.stringify(dataJSON))
    res.send(`<h1>Main</h1> <p>Количество посещений:  ${dataJSON.counter_main}</p> <br> <a href="/about">Go to About</a>`)

})

app.get('/about', (req, res) => {
    dataJSON.counter_about += 1;
    fs.writeFileSync(filePath, JSON.stringify(dataJSON))
    res.send(`<h1>About</h1> <p>Количество посещений: ${dataJSON.counter_about}</p>  <br> <a href="/">Go to Main</a>`)
})

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})