const http=require ("http");
server=http.createServer(function(req,resp){
    console.log("req.url"+req.url);
    resp.writeHeader(200,{'content-type':'text/html'});
    switch(req.url){
        case "/home":
            resp.write("<h1> On home");
            break;
        case "/aboutus":
            resp.write("<h1> In about us");
            break;
        default :
            resp.write("<h1> Default response from site");
            break;
        
    }
});

server.listen(3000);
console.log("server running at port 3000");