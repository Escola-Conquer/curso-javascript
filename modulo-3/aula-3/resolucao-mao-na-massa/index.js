let studentAge = 8

switch (studentAge) {
  case 8:
  case 9:
  case 10:
    console.log("Turma infantil");
    break;
  case 11:
  case 12:
  case 13:
    console.log("Turma juvenil");
    break;
  case 14:
  case 15:
  case 16:
    console.log("Turma jovem adulto");
    break;
     default:
   console.log("Entre em contato com a secretaria");
}