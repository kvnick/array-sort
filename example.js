var arraySort = require('./array-sort');

var 
    users = [];

users = [{
    id: 7,
    name: 'Foo',
    age: '34',
    email: { primary: 'foo@email.com' }
}, {
    id: 3,
    name: 'Baz',
    age: '77',
    email: { primary: 'baz@email.com' }
}, {
    id: 4,
    name: 'Bar',
    age: '67',
    email: { primary: 'bar@email.com' }
}];

console.log('--------------------------');
console.log('-- before sorting by Id --');
console.log('--------------------------');
arraySort.render(users);
arraySort.sortBy(users, 'id', true);
console.log('-------------------------');
console.log('-- after sorting by Id --');
console.log('-------------------------');
arraySort.render(users);