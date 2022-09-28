// Colar no console do navegador

var nome = "João";

{
    let nome = "Maria";
    console.log(nome); //Maria
}


console.log(nome); //João

var nome = "João";

{
    var nome = "Maria";
    console.log(nome); //Maria
}


console.log(nome); //Maria