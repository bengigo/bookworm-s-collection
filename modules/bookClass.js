export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now().toString();
  }

  static add() {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const addBtn = document.querySelector('#add-btn');
    const errorMessage = document.querySelector('#message-alert');
    const addMessage = document.querySelector('#add-message');

    addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let awesomeBooks = [];
      awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks') || '[]');
      if (title.value !== '' && author.value !== '') {
        const newBook = new Book(title.value, author.value);
        awesomeBooks.push(newBook);
        localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
        title.value = '';
        author.value = '';
        addMessage.style.display = 'flex';
        errorMessage.textContent = '';
      } else {
        errorMessage.textContent = 'Please fill every field';
        addMessage.style.display = 'none';
      }
    });
  }

  static display() {
    const displayContainer = document.querySelector('#display');
    let awesomeBooks = [];
    awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks') || '[]');

    awesomeBooks.forEach((book) => {
      displayContainer.innerHTML += `
                <div class="bookstyle">
                <p>"${book.title}" by ${book.author}</p>
                <button class="remove" id="${book.id}">Remove</button>
                
                </div>
              `;
    });
  }

  static remove() {
    const removeBtn = document.querySelectorAll('.remove');
    removeBtn.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        let awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks'));
        awesomeBooks = awesomeBooks.filter((book) => book.id !== e.target.id);
        localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks));
        window.location.reload();
      });
    });
  }
}