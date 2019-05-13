import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense( {description: 'Water bill', amount: 4500} ));
store.dispatch(addExpense( {description: 'Gas bill', createdAt:1000} ));
store.dispatch(addExpense( {description: 'Rent', amount: 109500} ));

/*
store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);
*/

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);
//console.log(store.getState());

const jsx = (
    <Provider store={store}>
       <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));







































// const Tempz = () => {
//     return <p>12345</p>;
// }



// const Layout = () => {
//     return (
//         <div>
//             <p>header</p>
//             <p>footer</p>
//             <Tempz />
//         </div>
//     );
// };

// ReactDOM.render(
//     <Layout />
//     , document.getElementById('app'));



// import './utils.js';
// import substract, { square, add } from './utils.js';

// console.log('app.js is running!');

// console.log(square(3));

// console.log(add(100,23));

// console.log(substract(100,23));

// import isSenior, {isAdult, canDrink} from './person.js'

// console.log(isAdult(19));

// console.log(canDrink(20));

// console.log(isSenior(70));
