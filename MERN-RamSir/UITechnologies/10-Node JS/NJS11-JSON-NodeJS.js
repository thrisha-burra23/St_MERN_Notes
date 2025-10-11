const fs=require('fs');

const biodata={
    name: "Nandhu",
    age:20,
    skill: "NodeJS Programmer"
}

console.log(biodata);

/* JSON.stringify(biodata)
converts a js value to a json string.
@param value- A js value , usually an object or array to be converted
*/

var myData=JSON.stringify(biodata);

console.log(myData);

fs.writeFileSync("json_data",myData,(err)=>{
    console.log("process completed");
} );