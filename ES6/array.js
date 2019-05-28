const arrayToCSV = (arr, delimiter = ',') =>
    arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');
// arrayToCSV([
//     ['a', 'b'],
//     ['c', 'd']
// ]); // '"a","b"\n"c","d"'
// arrayToCSV([
//     ['a', 'b'],
//     ['c', 'd']
// ], ';'); // '"a";"b"\n"c";"d"'
// console.log(arrayToCSV([
//     ['a', '"b" great'],
//     ['c', 3.1415]
// ]));
// console.log(arrayToCSV([
//     ['a', 'b', 'c', 'd'],
// ], ',')); //"a"+"b"+"c"+"d"
// console.log(arrayToCSV([
//     [1, 2, 3, 4],
// ], '-'));
// 1-2-3-4


const bifurcate = (arr, filter) =>
    arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [
        [],
        []
    ]);
const array = bifurcate(['beep', 'boop', 'foo', 'bar', 'bar2'], [true, true, false, true]);
// console.log(array);


const bifurcateBy = (arr, fn) =>
    arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [
        [],
        []
    ]);
const arr1 = bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b');
const arr2 = bifurcateBy(['beep', 'coop', 'foo', 'car'], x => x[0] === 'c');
const arr3 = bifurcateBy(['beep', 'coop', 'foo', 'car'], x => x[1] === 'o');
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
const chunk = (arr, size) =>
    Array.from({
            length: Math.ceil(arr.length / size)
        }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );
var arr_chunk = chunk([1, 2, 3, 4, 5], 2);
// console.log(arr_chunk)


const compact = arr => arr.filter(Boolean);
var arr_compact = compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]);
// console.log(arr_compact)


const countBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
var arr_countBy1 = countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
var arr_countBy2 = countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
// console.log(arr_countBy1)
// console.log(arr_countBy2)


const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
var arr_countOccurrences = countOccurrences([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 3], 1);
console.log(arr_countOccurrences)