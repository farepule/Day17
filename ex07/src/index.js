const range = {
  max: 100.0,
  min: -25.0,
  num1: 17.5,
  num2: 88.8,
  avarage: 45.325,
};

function middle() {
  const mdl = (range) => (range.max + range.min) / 2;

  return mdl;
}
console.log(middle(range));
module.exports = removeFirstTwo;
