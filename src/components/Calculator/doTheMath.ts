type Operation = (a: number, b: number) => number;
type OperationTypes = '+' | '-' | '/' | 'x';

const pipe =
  (...funcs) =>
  args =>
    funcs.reduce((acc, func) => func(acc), args);

const divide: Operation = (a, b) => {
  if (a === 0 || b === 0) {
    return 0;
  }

  let result = 1;
  while (true) {
    let tmp = multiply(b, result);
    if (tmp === a) {
      break;
    }
    if (tmp > a) {
      result = shiftDigits(divide(shiftDigits(a), b), -1);
      break;
    }
    result = add(result, 1);
  }
  return result;
};

const multiply: Operation = (a, b) => {
  let result = a;
  const shouldNegate = b < 0;
  const repeat = shouldNegate ? negate(b) : b;
  for (let i = 1; i < repeat; i = add(i, 1)) {
    result = add(result, a);
  }
  return shouldNegate ? negate(result) : result;
};

const subtract: Operation = (a, b) => {
  let result = 0;
  const isResultNegative = a < b;
  const [lower, higher] = isResultNegative ? [a, b] : [b, a];
  while (add(result, lower) < higher) {
    result = add(result, 1);
  }
  if (isResultNegative) {
    return negate(result);
  }
  return result;
};

const negate = (num: number) =>
  num < 0 ? Number(String(num).slice(1)) : Number(`-${num}`);

const add: Operation = (a, b) => a + b;

const countDecimals = (num: number) => {
  const str = String(num);
  const decimalIndex = str.indexOf('.');
  return decimalIndex === -1 ? 0 : subtract(str.length, decimalIndex);
};

const shiftDigits = (num, count = 1) => {
  const str = String(num);
  const decimalIndex = str.indexOf('.');

  if (!count) {
    return num;
  }

  if (count < 0) {
    if (decimalIndex === -1) {
      return Number(`${str.slice(0, count)}.${str.slice(count)}`);
    }
    const [integer, decimal] = str.split('.');
    const newInteger = integer.slice(0, count);
    const postiveCount = negate(count);
    const newDecimal = `${
      integer.length < postiveCount
        ? `${Array(add(subtract(postiveCount, integer.length), 1)).join(
            '0',
          )}${integer.slice(count)}`
        : integer.slice(count)
    }${decimal}`;
    return Number(`${newInteger}.${newDecimal}`);
  }

  if (decimalIndex === -1) {
    return Number(`${str}${Array(count + 1).join('0')}`);
  }
  const [integer, decimal] = str.split('.');
  const newInteger = `${integer}${
    decimal.length < count
      ? `${decimal.slice(0, count)}${Array(count + 1 - decimal.length).join(
          '0',
        )}`
      : decimal.slice(0, count)
  }`;
  const newDecimal = decimal.slice(count);
  return Number(`${newInteger}.${newDecimal}`);
};
const operations = {
  '+': add,
  '-': subtract,
  '/': divide,
  x: multiply,
};

export const doTheMath = ([objA, objB]) => {
  const a = parseFloat(objA.value);
  const b = parseFloat(objB.value);
  const aDecimals = countDecimals(a);
  const bDecimals = countDecimals(b);
  const decimalCount = aDecimals > bDecimals ? aDecimals : bDecimals;

  if (decimalCount) {
    const shiftedA = shiftDigits(a, decimalCount);
    const shiftedB = shiftDigits(b, decimalCount);
    const shiftedResult = operations[objB.operation](shiftedA, shiftedB);
    const negativeDecimalCount = negate(decimalCount);
    if (objB.operation === 'x') {
      return shiftDigits(shiftedResult, multiply(negativeDecimalCount, 2));
    }
    return shiftDigits(shiftedResult, negativeDecimalCount);
  }

  return operations[objB.operation](a, b);
};
