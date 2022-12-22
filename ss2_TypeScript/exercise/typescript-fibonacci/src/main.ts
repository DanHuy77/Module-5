let sum:number = 0;
let n:number = 20;

// Sử dụng đệ quy
function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log("Số fibonacci thứ " + n + ": " + fibonacci(n));

console.log("Dãy " + n + " số Fibonacci đầu tiên:")
for (let i = 0; i <= n; ++i) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng của " + n + " số fibonacci: " + sum);