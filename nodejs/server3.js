const http =require("http");

const fs = require("fs");

const url = require ("url");

const m3 = require("./module");

server = http.createServer(function(req,resp){
    var q = url.parse(req.url,true);
    console.log(q);
    switch (q.pathname){
        case "/home":
            rs = fs.createReadStream("./public/form.html");
            resp.writeHeader(200,{'content-type':'text/html'});
            rs.pipe(resp);
            rs.on("error",function(err){
                console.log("error occured",err);
            })
            break;
        case "/submit_data":
            resp.write("<h1>Form submitted successfully<h1>");
            resp.write("<br>num1:  "+q.query.num1+"num2 : "+q.query.num2);
            var ans = m3.addition(q.query.num1,q.query.num2);
            resp.write("<h3> Addition: "+ans+"</h1>")
            resp.end();
        break;
        default:
            resp.write("this is default page");
            resp.write("<a href='/home'>Home</a>")
            break;
    }

   
});
server.listen(8080,function(){
    
    console.log("server is running on  port: 8080")
    
})