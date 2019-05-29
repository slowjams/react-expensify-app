import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC0W9ERWX7-_V7H7msuCJDPbH98qjG03yg",
    authDomain: "react-redux-expensify.firebaseapp.com",
    databaseURL: "https://react-redux-expensify.firebaseio.com",
    projectId: "react-redux-expensify",
    storageBucket: "react-redux-expensify.appspot.com",
    messagingSenderId: "735272809416",
    appId: "1:735272809416:web:b1836ab4f42b0091"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default};

// database.ref('expenses').once('value').then((snapshot) => {
//   const expenses = [];

  
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123456
// });


// database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });


// const notes = [{
//     id: 12,
//     title:'First node!',
//     body: 'This is my note'
// },{
//     id: '761ase',
//     title:'another node!',
//     body: 'This is my note'
// }]

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error fetching data', e);
// });

// setTimeout(() => {
//     database.ref('age').set(28);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value',onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city').once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data', e);
// });




// database.ref().set({
//     name: 'Dong',
//     age: 31,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     location : {
//         city: 'Sydney',
//         country: 'Australia'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });


// database.ref('attribute').set({
//     height: 180,
//     weight: 85
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('Things didnt work for the second error.', e);
// });

// database.ref('name').set(null);

// database.ref().remove().then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });
