// function min(a, b) {
//     if (a < b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }
//
// function max(a, y) {
//     if (a > y) {
//         return a
//     }
//     else {
//         return y;
//     }
// }
// function min(a, b) {
//     return a < b ? a : b;
// }
// function max(a, y) {
//     return a > y ? a : y;
// }

function sum(a) {
    let currentSum = a;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function () {
        return currentSum;
    };
    return f;
}
console.log(sum(5)(2));