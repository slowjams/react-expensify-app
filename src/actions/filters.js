export const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

export const sortByDate = () => ({
    type: 'Sort_BY_DATE',
});

export const sortByAmount = () => ({
    type: 'Sort_BY_AMOUNT',
});

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});