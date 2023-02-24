const collectionLink = document.querySelector('#collection-link');
const addToCollection = document.querySelector('#add-collection');
const collectionForm = document.querySelector('#collection-form');
const collectionAuthorInput = document.querySelector('#author-collection');
const collectionTitleInput = document.querySelector('#title-collection');
const collectionYearInput = document.querySelector('#year-collection');
const collectionPagesInput = document.querySelector('#pages-collection');
const readCheck = document.querySelector('#read');
const notReadCheck = document.querySelector('#not-read');
let status = '';
function statusCheck() {
  if (readCheck.checked) {
    status = 'Read';
  }
  if (notReadCheck.checked) {
    status = 'Not read';
  }
  return status;
}
const submitToCollection = document.querySelector('#submit-collection');
const collectionContainer = document.querySelector('#collection-container');
const bookList = document.querySelector('#collection');
let newBook = {};

let collection = [];
collection = JSON.parse(localStorage.getItem('collection') || '[]');

collectionLink.addEventListener('click', () => {
  wishlistContainer.style.display = 'none';
  collectionContainer.style.display = 'flex';
})

function Book(title, author, publishYear, numberOfPages, status) {
  this.title = title;
  this.author = author;
  this.publishYear = publishYear;
  this.numberOfPages = numberOfPages;
  this.status = status;
  this.index = collection.length + 1;
}

function displayCollection() {
  bookList.innerHTML = '';
  let checkedStatus = '';
  let collection = [];
  collection = JSON.parse(localStorage.getItem('collection') || '[]');
  collection.forEach((book) => {
    if (book.status === 'Read') {
      checkedStatus = 'checked';
    } else {
      checkedStatus = '';
    }
    bookList.innerHTML += `
    <li class="card">
      <div>
        <p class="card-title">${book.title} by ${book.author}</p>
      </div>
      <div>
        <p class="info">Publish year: ${book.publishYear}</p>
        <p class="info"> Number of pages: ${book.numberOfPages}</p>
      </div>
      <div>
        <p>ebook?</p>
        <p>${book.status}</p>
        <p class="switch-input small"><label class="switch"><input class="switch-input"
        type="checkbox" ${checkedStatus}><span class="slider" id="${book.index}"></span></label></p>
      </div>
      <div>
        <p<button class="remove" id="${book.index}">Remove</button>
      </div>
    </li>
    `;
  });
}

function displayCollectionForm() {
  collectionForm.classList.add('active');
}

function createBook() {
  const author = collectionAuthorInput.value;
  const title = collectionTitleInput.value;
  const publishYear = collectionYearInput.value;
  const numberOfPages = collectionPagesInput.value;
  newBook = new Book(title, author, publishYear, numberOfPages, statusCheck());
  return newBook;
}

function addCollectionBook() {
  let collection = [];
  collection = JSON.parse(localStorage.getItem('collection') || '[]');
  collection.push(newBook);
  collection.forEach((book, i) => {
    book.index = i + 1;
  });
  localStorage.setItem('collection', JSON.stringify(collection));
}

function hideCollectionForm() {
  collectionForm.classList.remove('active');
}

addToCollection.addEventListener('click', () => {
  displayCollectionForm();
});


submitToCollection.addEventListener('click', (e) => {
  e.preventDefault();
  // not applying a form validation to prevent empty input value submits
  // because input fields will be converted to 'required'
  createBook();
  addCollectionBook();
  displayCollection();
  setTimeout(hideCollectionForm, 150);
});

displayCollection();

bookList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('remove')) {
    let collection = JSON.parse(localStorage.getItem('collection') || '[]');
    collection = collection.filter(
      (book) => book.index !== Number(e.target.id),
    );
    collection.forEach((book, i) => {
      book.index = i + 1;
    });
    localStorage.setItem('collection', JSON.stringify(collection));
    displayCollection();
  }
  if (e.target.classList.contains('slider')) {
    const collection = JSON.parse(localStorage.getItem('collection') || '[]');
    const objIndex = Number(e.target.id);
    if (collection[objIndex - 1].status === 'Read') {
      collection[objIndex - 1].status = 'Not read';
    } else {
      collection[objIndex - 1].status = 'Read';
    }
    localStorage.setItem('collection', JSON.stringify(collection));
    displayCollection();
  }
});


// if collectionContainer has flex display, bottom border of collection list should have a different color or border px should be more