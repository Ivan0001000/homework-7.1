function out() {
  let total = 0;
  return function innerSum(num) {
    total += num;
    return total;
  };
}

let add = out();

console.log(add(4));
console.log(add(4));
console.log(add(4));
console.log(add(4));
