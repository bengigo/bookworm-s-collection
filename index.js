import Book from "./modules/bookClass.js";

import displayContact from "./modules/displayContact.js";

import displayForm from "./modules/displayForm.js";

import displayList from "./modules/displayList.js";

import displayTime from "./modules/displayTime.js"

Book.add();

Book.display();

Book.remove();

// displayList();

// displayForm();

// displayContact();

// displayTime();
setInterval(displayTime, 1000);