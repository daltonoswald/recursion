function fibs(num) {
    const fib = [0,1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib
}

console.log(fibs(8));

function fibsRec(num) {
    const fibRec = [0,1];
    if (num < 2) {
        return num
    }
    return fibsRec(num-1) + fibsRec(num-2);
} 

console.log(fibsRec(6));
console.log(fibsRec(8));