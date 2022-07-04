import { DateTime } from "./luxon.js"

const displayTime = () => {
    const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
    console.log(now);

    const timeSlot = document.querySelector('#time');
    timeSlot.textContent = now.toLocaleString();
}

export default displayTime();