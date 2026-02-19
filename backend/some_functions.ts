function fibonacci(nth: number): number {
  let a = 0n;
  let b = 1n;
  let res = 0;
  for (let i = 1; i < nth; i++) {
    res = a + b;
    a = b;
    b = res;
  }
  return res;
}

export {
  fibonacci
};
