//const data = [
//    {
//        firstName: 'Ashton',
//        lastName: 'Kutcher',
//        age: 40,
//    },
//    {
//        firstName: 'Bradley',
//        lastName: 'Pitt',
//        age: 54,
//    },
//    {
//        firstName: 'Hannah',
//        lastName: 'Dakota',
//        age: 24,
//    },
//];




//for (let i = 0; i <= arr.length; i++) {
//    if (arr[i] === 4) {
//        arr[i] = 'four';
//    }
//   console.log(arr[i]);
//}
//let i = 0;
//do {
//    console.log('rrr');
//    console.log(arr[i]);
//    i++;
//} while (i < arr.length);
//console.log(arr);

// const obj = {
//     name: 'John',
//     lastName: 'Smith',
//     age: 24,
// };
// for (let key in obj) {
//     console.log (`${key}: ${obj[key]}`);
// }

function min(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

function max(a, y) {
    if (a > y) {
        return a
    }
    else {
        return y;
    }
}
function min(a, b) {
    return a < b ? a : b;
}
function max(a, y) {
    return a > y ? a : y;
}
function rand(val, min, max, length) {
    var obj = {}, arr = [val];
    obj[val] = true;
    length--;
    while (length) {
        var rnd = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!obj[rnd]) {
            obj[rnd] = true;
            length--;
            arr[Math.random() > .5 ? 'push' : 'unshift'](rnd)
        };
    }
    return arr
}

