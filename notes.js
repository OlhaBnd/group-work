// Отримуємо елементи форми та списку нотаток
const noteForm = document.getElementById('note-form');
const notesList = document.getElementById('notes-list');

// Масив для зберігання нотаток
let notes = [];

// Функція для додавання нотатки
function addNote(title, content) {
    const note = {
        id: Date.now(), // Унікальний ID на основі часу
        title,
        content,
    };
    notes.push(note); // Додаємо нотатку до масиву
    renderNotes(); // Оновлюємо список нотаток
}

// Функція для видалення нотатки
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id); // Видаляємо нотатку з масиву
    renderNotes(); // Оновлюємо список нотаток
}

// Функція для відображення нотаток
function renderNotes() {
    notesList.innerHTML = ''; // Очищаємо список перед оновленням
    notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="deleteNote(${note.id})">Видалити</button>
        `;
        notesList.appendChild(noteCard); // Додаємо нотатку до списку
    });
}

// Обробник події для форми
noteForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Забороняємо стандартну поведінку форми

    // Отримуємо значення з полів форми
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;

    // Додаємо нову нотатку
    addNote(title, content);

    // Очищаємо поля форми
    noteForm.reset();
});