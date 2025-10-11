// fs is a module which have file system operations, write copy read etc


const myfs=require('fs');
myfs.writeFileSync("MyData.txt","My NodeJs file");
//rewrites the old data
myfs.writeFileSync("MyData.txt","My NodeJs file rewrite");
