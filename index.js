const isPerfect = (number) => {
  let i = 1;
  let sum = 0;

  while (i < number) {
    if (number % i === 0) {
      sum = sum + i;
    }
    i = i + 1;
  }

  if (number > 0 && number === sum) {
    return true;
  } else {
    return false;
  }
};

export default isPerfect;

// Проверка

const number = 28;
const result = isPerfect(number);

console.log(result);
