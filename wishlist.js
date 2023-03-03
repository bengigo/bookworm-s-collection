const wishlistLink = document.querySelector('#wishlist-link');
const addToWishlist = document.querySelector('#add-wishlist');
const wishlistForm = document.querySelector('#wishlist-form');
const wishlistTitleInput = document.querySelector('#title-wishlist');
const wishlistAuthorInput = document.querySelector('#author-wishlist');
const wishlistYearInput = document.querySelector('#year-wishlist');
const wishlistPagesInput = document.querySelector('#pages-wishlist');
const linkInput = document.querySelector('#purchase-link');
const submitToWishlist = document.querySelector('#submit-wishlist');
const wishlistContainer = document.querySelector('#wishlist-container');
const wishList = document.querySelector('#wishlist');
let newWishBook = {};

let wishlist = [];
wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

wishlistLink.addEventListener('click', () => {
    collectionContainer.style.display = 'none';
    wishlistContainer.style.display = 'flex';
})
  
function hideWishlistForm() {
  wishlistForm.classList.remove('active');
}

addToWishlist.addEventListener('click', () => {
  displayWishlistForm();
});

function WishBook(title, author, publishYear, numberOfPages, purchaseLink) {
  this.title = title;
  this.author = author;
  this.publishYear = publishYear;
  this.numberOfPages = numberOfPages;
  this.purchaseLink = purchaseLink;
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
      <a href="${book.purchaseLink}" target="_blank">Purchase</a>
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
  const linkToPurchase = linkInput.value;
  newWishBook = new WishBook(title, author, publishYear, numberOfPages, linkToPurchase);
  return newWishBook;
}

function addWishBook() {
  let wishlist = [];
  wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
  wishlist.push(newWishBook);
  wishlist.forEach((book, i) => {
    book.index = i + 1;
  });
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}


submitToWishlist.addEventListener('click', (e) => {
  e.preventDefault();
  createWishBook();
  addWishBook();
  displayWishlist();
  setTimeout(hideWishlistForm, 150);
});

displayWishlist();

wishList.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.classList.contains('remove')) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    wishlist = wishlist.filter(
      (book) => book.index !== Number(e.target.id),
    );
    wishlist.forEach((book, i) => {
      book.index = i + 1;
    });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
  }

})

wishList.addEventListener('click', (e) =>{
  e.preventDefault();
  if (e.target.tagName === 'A') {
    window.open(e.target.href, '_blank');
  }
})