// MÓDULO 2 - DESAFIO CONQUER

//Dado o seguinte objeto, crie uma cópia dele na sua máquina e realize as operações indicadas:

let objConquer = {
    plataforma: "Conquer",
    fundacao: "2016",
    cursos: {dados: ["excel", "SQL"],
            lideranca: ["apresentação de alto impacto", "inteligência emocional"],
            markerting: ["branding", "linkedin"]},
    inovacao_constante: true
};

// 1 - Agora chegou sua vez de criar um objeto objUser com suas informações pessoais de nome (primeiro nome), idade, cidade.

let objUser = {
    nome: "Ariel",
    idade: 26,
    cidade: "Jundiaí"
}

// 2 - Adicione seu objUser como mais uma propriedade (key) do objConquer;

objConquer['objUser'] = objUser;


// 3 - Altere seu campo "nome" em objUser para o seu nome completo, de forma que o objUser já esteja inserido no objConquer antes da alteração;

objConquer['objUser']['nome'] = "Ariel Faria do Prado";


// 4 - Usando coerção explícita, altere a string "2016" para o formato number, em "fundacao";

objConquer['fundacao'] = Number(objConquer['fundacao']);


// 5 - Imprima seu objeto no console utilizando console.table().

console.table(objConquer);
