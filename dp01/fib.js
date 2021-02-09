const fib = (n) => {
  if(n<=2) return 1;

  return fib(n-1) + fib(n-2)
}

let n = 7
console.log(`fib of ${n} : `,fib(n))