store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const demoState = {
    expenses: [{
        id: 'sdddsd',
        description: 'January Rent',
        note: 'this is last payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

const expenseOne = store.dispatch(addExpense( { description: 'Rent', amount: 100, createdAt: -21000}));

const expenseTwo = store.dispatch(addExpense( { description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense( { id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));




/* -------------------------------------------------------------------------------*/ 

// const user = {
//     name:'Jen',
//     age: 24
// }

// console.log({
//     ...user,
//     location: 'Sydney',
//     name: 'Dong'
// });