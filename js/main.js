import { formatDuration, differenceInHours, differenceInDays, differenceInYears } from 'date-fns';
import { UI_ELEMENTS } from './view';

UI_ELEMENTS.BTN.addEventListener('click', getInterval);

function getInterval() {
    const currentDate = new Date().getTime();
    const userDate = new Date(UI_ELEMENTS.INPUT.value).getTime();

    const hours = differenceInHours(userDate, currentDate);
    const days = differenceInDays(userDate, currentDate);
    const years = differenceInYears(userDate, currentDate);
    
    renderCountData(years, days, hours);
}

function renderCountData(years, days, hours) {
    const resultInterval = formatDuration({
        years,
        days,
        hours,
        },
        { delimiter: ', or ' }
    )

    UI_ELEMENTS.RESULT.textContent = resultInterval;
}
