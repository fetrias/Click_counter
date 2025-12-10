const countElement = document.getElementById('count');
const incrementBtn = document.getElementById('incrementBtn');
const resetBtn = document.getElementById('resetBtn');
const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modalBtn');

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

        // Показать модальное окно при 99 кликах
        if (data.count === 99) {
            modal.classList.add('show');
        }
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

// Закрыть модальное окно
function closeModal() {
    modal.classList.remove('show');
}

// События
incrementBtn.addEventListener('click', incrementCount);
resetBtn.addEventListener('click', resetCount);
modalBtn.addEventListener('click', closeModal);

// Загрузить начальное значение
getCount();
