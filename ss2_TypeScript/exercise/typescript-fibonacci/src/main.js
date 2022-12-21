var sum = 0;
var n = 20;
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
console.log("Số fibonacci thứ " + n + ": " + fibonacci(n));
for (var i = 0; i <= n; ++i) {
    sum += fibonacci(i);
}
console.log("Tổng của " + n + " số fibonacci: " + sum);
