const displayContact = () => {
  const contactLink = document.querySelector('#contact');

  const listPage = document.querySelector('#display-section');
  const formPage = document.querySelector('#form-section');
  const contactPage = document.querySelector('#contact-section');

  contactLink.addEventListener('click', () => {
    listPage.style.display = 'none';
    formPage.style.display = 'none';
    contactPage.style.display = 'flex';
  });
};

export default displayContact();