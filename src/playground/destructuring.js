const book = {
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
    publish: {
      name: 'Penguin'
    }
};

const {name:publisherName = 'Self-Published' } = book.publish;

console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state] = address;

console.log(`Youz are in ${street} ${city}`);

const item = ['Coffee (hot)', '$2.00','$2.50', '$2.75'];

const [ch,,price] = item;

console.log(`A medium ${ch} costs ${price}`);