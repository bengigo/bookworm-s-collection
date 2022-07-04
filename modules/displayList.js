export default function displayList() {
  const listLink = document.querySelector('#list');

  const listPage = document.querySelector('#display-section');
  const formPage = document.querySelector('#form-section');
  const contactPage = document.querySelector('#contact-section');

  listLink.addEventListener('click', () => {
    listPage.style.display = 'flex';
    formPage.style.display = 'none';
    contactPage.style.display = 'none';
    window.location.reload();
  });
};