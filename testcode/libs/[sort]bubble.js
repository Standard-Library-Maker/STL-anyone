const BubbleSort = function(array) {
  console.log("----- Bubble Sort -----");
  console.log(`input : ${array}`);
  let input = array;

  let tmp;
  for(let i = input.length - 1; i > 0; i--) {
    for(let j = 0; j < i; j++) {
      if(input[j] > input[j + 1]) {
        tmp = input[j + 1];
        input[j + 1] = input[j];
        input[j] = tmp;
      }
    }
    console.log(`${input.length - i}th progressing ... ${input}`);
  }
  return input;
};

module.exports = BubbleSort;