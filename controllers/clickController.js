// Контроллер для работы со счетчиком кликов
let clickCount = 0;

// GET - получить текущее значение счетчика
const getCount = (req, res) => {
    res.json({ count: clickCount });
};

// POST - увеличить счетчик
const incrementCount = (req, res) => {
    const { amount = 1 } = req.body;
    clickCount += amount;
    res.json({ count: clickCount, message: 'Счетчик увеличен' });
};

// PUT - установить конкретное значение счетчика
const setCount = (req, res) => {
    const { value } = req.body;
    if (typeof value === 'number') {
        clickCount = value;
        res.json({ count: clickCount, message: 'Значение установлено' });
    } else {
        res.status(400).json({ error: 'Некорректное значение' });
    }
};

// DELETE - сбросить счетчик
const resetCount = (req, res) => {
    clickCount = 0;
    res.json({ count: clickCount, message: 'Счетчик сброшен' });
};

module.exports = {
    getCount,
    incrementCount,
    setCount,
    resetCount
};
