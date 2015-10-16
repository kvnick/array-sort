describe('Сортировка массива:',function() {
  var arraySort = require('../array-sort');

  var 
    users = [],
    exampleArr;

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
  }],
  array = [];

  array.push({x: 4, y: 1, z: {a: 2}});
  array.push({x: 3, y: 1, z: {a: 3}});
  array.push({x: 2, y: 3, z: {a: 3}});
  array.push({x: 1, y: 2, z: {a: 1}});

  beforeEach(function() {
    exampleArr = array;
  });


  it('должно отфильтровать массив по столбцу x по возрастанию', function() {
    arraySort.sortBy(exampleArr, 'x');
    expect(exampleArr[0].x).toEqual(1);
    expect(exampleArr[0].y).toEqual(2);
    expect(exampleArr[3].x).toEqual(4);
    expect(exampleArr[3].y).toEqual(1);
  });

  it('по убыванию поля y', function() {
    arraySort.sortBy(exampleArr, 'y', true);
    expect(exampleArr[0].y).toEqual(3);
    expect(exampleArr[0].x).toEqual(2);
    expect(exampleArr[3].y).toEqual(1);
    // ???
    expect(exampleArr[3].x).toEqual(4);
  });

});