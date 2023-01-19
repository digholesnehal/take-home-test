// sayIt('my')('name', 'is')('jonathan')() === 'my name is jonathan';
let output = '';

const sayIt = function (...args) {
    output += (output ? ' ' : '') + args.join(' ');

    return args.length ? function (...params) {
        return params.length ? sayIt(...params) : output;
    } : output
}


console.log(sayIt('this')('is Snehal')())