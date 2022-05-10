let N = parseInt(gets());

var raiz = Math.sqrt(5);
var fib = (Math.pow(((1+ raiz)/2), N) - Math.pow(((1-raiz)/2), N)) /  raiz;
print(fib.toFixed(1));
