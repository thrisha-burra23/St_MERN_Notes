const fs = require('fs');
const http = require('http');



const server = http.createServer((req,res) => {

    const result = fs.readFileSync("count.txt", "utf-8");
   var  visit=parseInt(result,10)||0;

    visit=visit+1;
    const data=fs.writeFileSync("count.txt", String(visit));
    if(req.url==='/vis'){
    const count = fs.readFileSync("count.txt", "utf-8");
    res.end(count);
    }
});

server.listen(9000, () => {
    console.log("server running");
});