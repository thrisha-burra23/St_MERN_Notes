var http=require("http");//require the http module
// our custom module
var dt=require("./MyModule.js");
http.createServer(function(req,res){
    //setting the server response
    res.writeHead(200,{'content-type':'text/html'});
    //using the custom module to get date and time
    res.write("the date & time currently "+dt.myDateTime());
    res.end();
    //sever listem=n on port 9000
}).listen(9000);
