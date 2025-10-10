const myfs = require("fs"); //file system
myfs.writeFileSync("praneeth/myinfo.txt","Hello World");
const data = myfs.readFileSync("praneeth/myinfo.txt","utf-8");


myfs.readFile("praneeth/myinfo.txt","utf-8",(err,Data)=>{ 
    //this doesnt work with sync because it do not have callback
    console.log(Data);
    console.log(err);
});
