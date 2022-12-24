const http=require("http");

const fs = require("fs");
server = http.createServer(function(req,resp){
   rs =  fs.createReadStream("./public/01_Resume.html");
   rs.pipe(resp);
});
server.listen(8080,function(){
    console.log("server is running on port 8080")
});
