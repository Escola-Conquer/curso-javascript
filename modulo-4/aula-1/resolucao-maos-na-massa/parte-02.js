const names = ["John", "Ana", "Viktor"];

for (let name of names) {
    console.log(name);
}

/*
output:

John
Ana
Viktor
*/

for (let name of names.entries()) {
  console.log(name);
}

/*
output:

[ 0, 'John' ]
[ 1, 'Ana' ]
[ 2, 'Viktor' ]
*/

