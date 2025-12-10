const express = require('express');
const router = express.Router();
const clickController = require('../controllers/clickController');

// GET /api/clicks - получить текущее значение
router.get('/clicks', clickController.getCount);

// GET /api/clicks/:id - пример работы с параметрами
router.get('/clicks/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        message: 'Параметр маршрута получен',
        count: 0
    });
});

// POST /api/clicks - увеличить счетчик
router.post('/clicks', clickController.incrementCount);

// PUT /api/clicks - установить значение
router.put('/clicks', clickController.setCount);

// DELETE /api/clicks - сбросить счетчик
router.delete('/clicks', clickController.resetCount);

module.exports = router;
