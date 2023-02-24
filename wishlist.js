const wishlistLink = document.querySelector('#wishlist-link');
const addToWishlist = document.querySelector('#add-wishlist');
const wishlistForm = document.querySelector('#wishlist-form');
const submitToWishlist = document.querySelector('#submit-wishlist');
const wishlistContainer = document.querySelector('#wishlist-container');

// when you click on wishlist link, wishlist container shoud be visible and
// collection container should have display none

wishlistLink.addEventListener('click', () => {
    alert('clicked to wishlist link');
    // hide collection
    collectionContainer.style.display = 'none';
    wishlistContainer.style.display = 'flex';
    // show collection
})




function displayWishlistForm() {
  wishlistForm.classList.add('active');
}
  
function hideWishlistForm() {
  wishlistForm.classList.remove('active');
}

addToWishlist.addEventListener('click', () => {
  displayWishlistForm();
});

submitToWishlist.addEventListener('click', (e) => {
  e.preventDefault();
  setTimeout(hideWishlistForm, 150);
});



console.log(collection);