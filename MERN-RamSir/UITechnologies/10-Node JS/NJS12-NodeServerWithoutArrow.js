const myhttp=require("http");

//creating a server 
const myServer=myhttp.createServer(function(req,res){
    res.end("Hello from server, Server is running....");
});

// create port number and server is running
myServer.listen(9000, "127.0.0.1", function(){// 127.0.0.1 is local host address-default value
    console.log("server is running in port 9000");

    //  console.log("server is running in port http://localhost:9000"); using this we can get a link direct to run the application

    //http://localhost:9000  for running server
});