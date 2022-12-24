const http=require("http");
    // function processRequest(req,resp){}
// http.createServer(function(req,resp){})
server = http.createServer(function(req,resp){
    resp.writeHeader(200,{'content-type':'text/html'});
    console.log("url"+req.url)
    if(req.url==="/home" && req.method==="GET"){
        resp.write("<h1>You selected home");
        resp.write("<h2>Welcome to our system services");
        resp.end();

    }
    else if (req.url==="/aboutus"){
        resp.write("<h1>your have selected about us");
        resp.write("<h2>we deliver multiple services with best quality");
        resp.end();

    }
});
server.listen(3000);
console.log("server running at port 3000");