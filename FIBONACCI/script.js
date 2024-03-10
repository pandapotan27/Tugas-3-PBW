// ini merupakan bagian javascript dari deret fibonacci

function calculateFibonacci() {
    var n = document.getElementById('fibInput').value;
    var result = '';

    if (n <= 0) {
        result = 'Mohon masukkan bilangan bulat positif';
    } else {
        var fib = [0, 1];
        for (var i = 2; i <= n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        result = 'Deret Fibonacci: ' + fib.slice(0, n + 1).join(', ');
    }

    document.getElementById('fibResult').textContent = result;
}
