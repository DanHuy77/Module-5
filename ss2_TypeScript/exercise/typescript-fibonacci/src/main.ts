let sum = 0;
let n = 20;

// Sử dụng đệ quy
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log("Số fibonacci thứ " + n + ": " + fibonacci(n));

for (let i = 0; i <= n; ++i) {
    sum += fibonacci(i);
}
console.log("Tổng của " + n + " số fibonacci: " + sum);