const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');

// Получить текущее значение счетчика
async function getCount() {
    try {
        const response = await fetch('/api/clicks');
        const data = await response.json();
        countElement.textContent = data.count;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Увеличить счетчик
async function incrementCount() {
    try {
        const response = await fetch('/api/clicks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 1 })
        });
        const data = await response.json();
        countElement.textContent = data.count;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// Сбросить счетчик
async function resetCount() {
    try {
        const response = await fetch('/api/clicks', {
            method: 'DELETE'
        });
        const data = await response.json();
        countElement.textContent = data.count;
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

// События
incrementBtn.addEventListener('click', incrementCount);
resetBtn.addEventListener('click', resetCount);

// Загрузить начальное значение
getCount();
