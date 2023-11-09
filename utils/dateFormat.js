import moment from 'moment';

export const dateFormat = (dateFromAPI) =>
    moment(dateFromAPI).startOf('dddd, Do MMM YYYY').fromNow();
