
const myfs=require('fs');
const mybuf_data=myfs.readFileSync("MyData.txt");
console.log(mybuf_data);

const myorgData=mybuf_data.toString();
console.log(myorgData);