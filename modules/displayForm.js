export default function displayForm() {
  const addLink = document.querySelector('#add');

  const listPage = document.querySelector('#display-section');
  const formPage = document.querySelector('#form-section');
  const contactPage = document.querySelector('#contact-section');

  addLink.addEventListener('click', () => {
    listPage.style.display = 'none';
    formPage.style.display = 'flex';
    contactPage.style.display = 'none';
  });
}