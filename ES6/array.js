const arrayToCSV = (arr, delimiter = ',') =>
    arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n');
arrayToCSV([
    ['a', 'b'],
    ['c', 'd']
]); // '"a","b"\n"c","d"'
arrayToCSV([
    ['a', 'b'],
    ['c', 'd']
], ';'); // '"a";"b"\n"c";"d"'
console.log(arrayToCSV([
    ['a', '"b" great'],
    ['c', 3.1415]
]));
console.log(arrayToCSV([
    ['a', 'b', 'c', 'd'],
], '+')); //"a"+"b"+"c"+"d"
console.log(arrayToCSV([
    [1, 2, 3, 4],
], '-'));
// 1-2-3-4