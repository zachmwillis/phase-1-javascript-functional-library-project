//myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
            callback(collection[key], key, collection);
        }
        }
    } else {
        console.error('Invalid collection type');
    }
    return collection;
}
const numbers = [1, 2, 3, 4];
const result = myEach(numbers, function(element, index, array) {
    console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
});
console.log('Result:', result);



//myMap
function myMap(collection, callback) {
    let test = [];
    if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
        test.push(callback(collection[i], i, collection));
    }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
            test.push(callback(collection[key], key, collection));
        }
        }
    } else {
        console.error('Invalid collection type');
        return test;
    }
    return test;
}
const arrayNumbers = [1, 2, 3, 4];
const maps = myMap(numbers, function(element) {
    return element * 2;
});
console.log('Original Array:', numbers);
console.log('Mapped Result:', maps);



//myReduce
function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    if (initialValue === undefined) {
    for (let i = 1; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
    }
    } else {
    for (let i = 0; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
    }
    }
    return accumulator;
}
const arraysTwo = [1, 2, 3, 4];
const sumTogether = myReduce(numbers, function(acc, element) {
    return acc + element;
}, 0);  
console.log('Sum:', sumTogether);



//myFine
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
            return collection[i];
        }
    }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
            return collection[key];
        }
        }
    } else {
        console.error('Invalid collection type');
    }
    return undefined;
}
const arraysThree = [1, 2, 3, 4];
const vals = myFind(numbers, function(element) {
    return element > 2;
});
console.log('Found Value:', vals);