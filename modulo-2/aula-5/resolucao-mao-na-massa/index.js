let user = {
    nome: "Batman",
    sobrenome: "Sobrenome Batman",
    idade: 26,
    cidade: "Jundiaí"
};
 
let computador = {
    marca: "Dell",
    cor: "Cinza"
}
 
user["computador"] = computador;
 
user["idade"] = 59;
 
console.log(user);
console.table(user);
console.log(user["nome"]);