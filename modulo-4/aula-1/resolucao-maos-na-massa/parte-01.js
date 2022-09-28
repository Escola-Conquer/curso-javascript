const ages = {
    Robert: 23,
    Camila: 21,
    Alfredo: 45,
    Luana: 12,
    Denilson: 68,
};

for (let person in ages) {
    const isEven = ages[person] % 2 === 0;
    if (isEven) console.log(person);
}