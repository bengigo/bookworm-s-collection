const wishlistLink = document.querySelector('#wishlist-link');
const addToWishlist = document.querySelector('#add-wishlist');
const wishlistForm = document.querySelector('#wishlist-form');
const wishlistTitleInput = document.querySelector('#title-wishlist');
const wishlistAuthorInput = document.querySelector('#author-wishlist');
const wishlistYearInput = document.querySelector('#year-wishlist');
const wishlistPagesInput = document.querySelector('#pages-wishlist');
const submitToWishlist = document.querySelector('#submit-wishlist');
const wishlistContainer = document.querySelector('#wishlist-container');
const wishList = document.querySelector('#wishlist');
let newWishBook = {};

let wishlist = [];
wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

wishlistLink.addEventListener('click', () => {
    alert('clicked to wishlist link');
    collectionContainer.style.display = 'none';
    wishlistContainer.style.display = 'flex';
})
  
function hideWishlistForm() {
  wishlistForm.classList.remove('active');
}

addToWishlist.addEventListener('click', () => {
  displayWishlistForm();
});

submitToWishlist.addEventListener('click', (e) => {
  e.preventDefault();
  createWishBook();
  setTimeout(hideWishlistForm, 150);
});

function WishBook(title, author, publishYear, numberOfPages) {
  this.title = title;
  this.author = author;
  this.publishYear = publishYear;
  this.numberOfPages = numberOfPages;
  this.index = wishlist.length + 1;
}

function displayWishlist() {
  wishList.innerHTML = '';
  let wishlist = [];
  wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  wishlist.forEach((book) => {
    wishList.innerHTML += `
    <li class="card">
      <div>
        <p class="card-title">${book.title} by ${book.author}</p>
      </div>
      <div>
        <p class="info">Publish year: ${book.publishYear}</p>
        <p class="info"> Number of pages: ${book.numberOfPages}</p>
      </div>
      <div>
        <button class="remove" id="${book.index}">Remove</button>
      </div>
    </li>
    `;
  });
}

function displayWishlistForm() {
  wishlistForm.classList.add('active');
}

function createWishBook() {
  const title = wishlistTitleInput.value;
  const author = wishlistAuthorInput.value;
  const publishYear = wishlistYearInput.value;
  const numberOfPages = wishlistPagesInput.value;
  newWishBook = new WishBook(title, author, publishYear, numberOfPages);
  console.log(newWishBook);
  return newWishBook;
}
