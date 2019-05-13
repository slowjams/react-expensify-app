import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';
import moment from 'moment'

test('should generate set start date object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate end start date object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate text filter object', () => {
    const action = setTextFilter('Date');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Date'
    });
});

test('should generate text filter object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'Sort_BY_DATE'
    });
});

test('should generate sort by date object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'Sort_BY_AMOUNT'
    });
});