const wishlistLink = document.querySelector("#wishlist-link");
const wishlistTitleInput = document.querySelector("#title-wishlist");
const wishlistAuthorInput = document.querySelector("#author-wishlist");
const wishlistYearInput = document.querySelector("#year-wishlist");
const wishlistPagesInput = document.querySelector("#pages-wishlist");
const linkInput = document.querySelector("#purchase-link");
const submitToWishlist = document.querySelector("#submit-wishlist");
const wishlistContainer = document.querySelector("#wishlist-container");
const wishList = document.querySelector("#wishlist");
let newWishBook = {};

let wishlist = [];
wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");

wishlistLink.addEventListener("click", () => {
  collectionContainer.style.display = "none";
  wishlistContainer.style.display = "flex";
  collectionLink.classList.toggle("passive");
  wishlistLink.classList.toggle("active");
});

class WishBook {
  constructor(title, author, publishYear, numberOfPages, purchaseLink) {
    this.title = title;
    this.author = author;
    this.publishYear = publishYear;
    this.numberOfPages = numberOfPages;
    this.purchaseLink = purchaseLink;
    this.index = wishlist.length + 1;
    this.status = "Not read";
  }

  static display() {
    wishList.innerHTML = "";
    wishlist.forEach((book) => {
      wishList.innerHTML += `
      <li class="card">
          <p class="card-title">${book.title} by ${book.author}</p>
        <div class="details">
          <p class="info">Publish year: ${book.publishYear}</p>
          <p class="info"> Number of pages: ${book.numberOfPages}</p>
          <a class="purchase info" href="${book.purchaseLink}" target="_blank">Purchase</a>
          <button class="move info" id="${book.index}">Add to collection</button>
          <button class="remove info" id="${book.index}">Remove</button>
        </div>
      </li>
      `;
    });
  }

  static add() {
    let wishlist = [];
    wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    const title = wishlistTitleInput.value;
    const author = wishlistAuthorInput.value;
    const publishYear = wishlistYearInput.value;
    const numberOfPages = wishlistPagesInput.value;
    const purchaseLink = linkInput.value;
    const newWishBook = new WishBook(
      title,
      author,
      publishYear,
      numberOfPages,
      purchaseLink
    );
    wishlist.push(newWishBook);
    wishlist.forEach((book, i) => {
      book.index = i + 1;
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    WishBook.display();
  }

  // delete
  static delete() {
    wishList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("remove")) {
        let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        wishlist = wishlist.filter(
          (book) => book.index !== Number(e.target.id)
        );
        wishlist.forEach((book, i) => {
          book.index = i + 1;
        });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
      }
      WishBook.display();
    });
  }
}

submitToWishlist.addEventListener("click", (e) => {
  e.preventDefault();
  WishBook.add();
});

wishList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName === "A") {
    window.open(e.target.href, "_blank");
  }
});

wishList.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("move")) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    wishlist = wishlist.filter((book) => book.index !== Number(e.target.id));
    wishlist.forEach((book, i) => {
      book.index = i + 1;
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    displayWishlist();
    const collection = JSON.parse(localStorage.getItem("collection") || "[]");
    collection.push(newWishBook);
    collection.forEach((book, i) => {
      book.index = i + 1;
    });
    localStorage.setItem("collection", JSON.stringify(collection));
    displayCollection();
  }
});

WishBook.display();
WishBook.delete();