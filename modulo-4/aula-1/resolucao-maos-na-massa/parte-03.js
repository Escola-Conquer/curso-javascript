// Parte 1

const bebidas = ['Refrigerante', 'Água', 'Suco', 'Leite', 'Guaraná'];

// For In

for (let i in bebidas) {
    console.log(bebidas[i]);
}

// For Of

for (let bebida of bebidas) {
    console.log(bebida);
}

// Parte 2

const numbers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];

let sum = 0;

for (let sum of numbers) {
    sum += sum;
    // return;
}

console.log('Soma: ' + sum);

console.log('Media: ' + sum / numbers.length);

// Parte 3

const notas = {
    bimestrel: 7.0,
    bimestre2: 3.7,
    bimestre3: 6.4,
    bimestre4: 8.6
}

let soma = 0;

for (let bimestre in notas) {
    soma += notas[bimestre];
}

console.log('Soma: ' + soma);

// Parte 4

let contagem = 0;

for (let bimestre in notas) {
    soma += notas[bimestre];
    contagem += 1;
}

console.log('Length: ' + contagem);

let media = soma / contagem;

if (media >= 7) {
    console.log('O aluno foi aprovado') // aprovado
} else {
    console.log('O aluno foi reprovado com a nota' + media)
}