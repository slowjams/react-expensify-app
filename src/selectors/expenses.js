import moment from 'moment';

export default  (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endtDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        //const endtDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endtDateMatch && textMatch;
    }).sort( (a, b) => {
        if (sortBy === 'date') {
            return b.createdAt - a.createdAt;
        }
        if (sortBy === 'amount') {
            return b.amount - a.amount;
        }
    });
};