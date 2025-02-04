//sum_array(arr) sums the elements of an array arr; array elements must be of number type

function sum_array_easy(arr) {
  arr.forEach((el) => {
    if (!typeof el == number) {
      console.log(
        'Warning!!! wrong array element type--must be number only--please check your array'
      );
    }
  });
  return arr.reduce((acc, el) => acc + el, 0);
}

module.exports = sum_array_easy;
