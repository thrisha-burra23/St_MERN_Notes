const myhttp=require("http");

//creating a server 
const myServer=myhttp.createServer((req,res)=>{
    res.end("Hello from server, Server is running....");
});

// create port number and server is running
myServer.listen(9000, "127.0.0.1", ()=>{
    console.log("server is running in port 9000");

    //https://localhost:9000---> for running server
  
}); 