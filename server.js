const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const clickRoutes = require('./routes/clickRoutes');

const app = express();
const PORT = 3000;

// Middleware для логирования
app.use(logger);

// Обработка тела запроса
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Раздача статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// API маршруты
app.use('/api', clickRoutes);

// Пример работы с query-параметрами
app.get('/search', (req, res) => {
    const { q, limit } = req.query;
    res.json({
        query: q,
        limit: limit || 10,
        message: 'Query-параметры получены'
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
