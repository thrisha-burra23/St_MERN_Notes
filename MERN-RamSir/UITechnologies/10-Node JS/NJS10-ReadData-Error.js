const fs=require('fs');

const data=fs.readFileSync("CURD/myinfo.txt","utf-8");
console.log(data);

const data1=fs.readFileSync("CURD/myinfo1.txt","utf-8",(err,data1)=>{
    console.log(data1);
    console.log(err);
}); 