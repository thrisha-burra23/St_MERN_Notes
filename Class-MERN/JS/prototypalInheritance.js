const grandfather={value:1};
const father=Object.create(grandfather);
const son=Object.create(father);

console.log(son.value);
