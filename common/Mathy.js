export { sqrt, square, diag, add };

function sqrt(num) {
  return Math.sqrt(num);
}

function square(num) {
  return num * num;
}

function diag(x, y) {
  return sqrt(square(x) + square(y));
}

function add(a, b) { //afegida perquè no existia
  return a + b;
}
