function sumFor(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function sumWhile(data) {
  let sum = 0;
  let i = 0;
  while (i < data.length) {
    sum += data[i];
    i++;
  }
  return sum;
}

function sumRecursion(data, n) {
  if (n === 0) {
    return data[n];
  }
  return data[n] + sumRecursion(data, n - 1);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function memoize(memo, num) { return memo + num; }, 0);
}

const myData = [1, 2, 3, 4];
console.log(sumFor(myData));
console.log(sumWhile(myData));
console.log(sumRecursion(myData, myData.length - 1));
console.log(sumTheSimpleWay(myData));
