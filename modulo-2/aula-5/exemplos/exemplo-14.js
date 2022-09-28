let user = {
    nome: "Gabriel",
    idade: 23,
    empregado: true,
    nacionalidade: "Brasileiro"
};

delete user["empregado"];

console.log(user);