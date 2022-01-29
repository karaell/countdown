import { formatDuration } from 'date-fns';
import { UI_ELEMENTS } from './view';

UI_ELEMENTS.BTN.addEventListener('click', getCountDate);

function getCountDate () {
    const currentDate = new Date().getTime();
    const userDate = new Date(UI_ELEMENTS.INPUT.value).getTime();
    
    const result = userDate - currentDate;
    convertData(result);
}

function convertData (result) {
    const hours = Math.floor ( result / (1000 * 60 * 60));
    const days = Math.floor (result / (1000 * 60 * 60 * 24));
    const years = Math.floor (result / (1000 * 60 * 60 * 24 * 365));

    renderCountData (years, days, hours);
}

function renderCountData(years, days, hours) {
    const interval = formatDuration({
        years: years,
        days: days,
        hours: hours,
    })

    UI_ELEMENTS.RESULT.textContent = interval;
}
