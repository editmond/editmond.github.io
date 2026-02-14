function fibonacci(nth: number): number {
  let a = 0;
  let b = 1;
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
