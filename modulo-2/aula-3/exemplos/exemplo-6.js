//checar se é um inteiro
const a = 12;
console.log(Number.isInteger(a)); //true - verdadeiro

//checar se é um NaN
const b = NaN;
console.log(Number.isNaN(b)); //true - verdadeiro

//mostrar até a segunda casa decimal
const c = 13.4567;
console.log(c.toFixed(2)); //13.45