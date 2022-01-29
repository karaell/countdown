import { formatDuration, intervalToDuration } from 'date-fns';
import { UI_ELEMENTS } from './view';

UI_ELEMENTS.BTN.addEventListener('click', getInterval);

function getInterval() {
    const currentDate = new Date();
    const userDate = new Date(UI_ELEMENTS.INPUT.value);

    const countData = intervalToDuration ( {
        start: currentDate, 
        end: userDate,
    });

    renderCountData(countData.years, countData.days, countData.hours)  
}

function renderCountData(years, days, hours) {
    const resultInterval = formatDuration({
        years,
        days,
        hours,
    })

    UI_ELEMENTS.RESULT.textContent = resultInterval;
}
