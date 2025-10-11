const fs=require('fs');
const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/write'){
        fs.writeFileSync("welcome.txt","Welcome...");
        res.end("finished");
    }
    if(req.url==='/read'){
        const result=fs.readFileSync("welcome.txt","utf-8");
        res.end(result);
    }
});

server.listen(9000,()=>{
    console.log("server running");
});