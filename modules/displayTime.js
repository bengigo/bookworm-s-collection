// import { DateTime } from './luxon.js';

// const displayTime = () => {
//   const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

//   const timeSlot = document.querySelector('#time');
//   timeSlot.textContent = now.toLocaleString();
// };

// const timeUpdate = () => {
//   setInterval(displayTime, 1000);
// };

// export default timeUpdate();

import { DateTime } from './luxon.js';

export default function displayTime() {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    const timeSlot = document.querySelector('#time');
    timeSlot.textContent = now.toLocaleString();
}