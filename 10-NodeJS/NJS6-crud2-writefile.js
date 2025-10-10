const myfs = require("fs"); //file system
myfs.writeFileSync("praneeth/myinfo.txt","Hello World");
myfs.appendFileSync("praneeth/myinfo.txt"," \nSai Praneeth");