const swap = function(array, num1, num2) {
  let newArr = array;
  let temp = newArr[num1];
  newArr[num1] = newArr[num2];
  newArr[num2] = temp;
  return newArr;
};

module.exports = swap;