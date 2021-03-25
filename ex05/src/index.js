let foo = 12,
  boo = 45;

function main(foo, boo) {
    foo = boo;
  return { foo, boo };
}
module.exports = main;
