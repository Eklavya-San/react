var fs  = require("fs");// fs module imported 
fs.writeFileSync("test.txt","hello kunal"); //fs has writeFileSync function 2 arguments file name, file content to be written
console.log(fs.readFileSync("./test.txt").toString());//read file from readFileSync function using toString to read actual data

fs.stat("test.txt",function(err,status){ //fs has stat function which will take argument of file name call back function which will take errror and variable which will show yuou error or other status funcition
    if(err){
        console.log("errror occured: "+err.code+"--->"+err.message);//
    }else{
        console.log(status);
        console.log(status.isFile());// checking if it  is file 
        console.log(status.isDirectory()); // checking if it is file directory
    }
})
