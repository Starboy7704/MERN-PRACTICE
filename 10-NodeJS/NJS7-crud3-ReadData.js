const myfs = require("fs");
const data = myfs.readFileSync("praneeth/myinfo.txt","utf-8");

console.log(data);