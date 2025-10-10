const myfs=require('fs');

// JSON - JavaScript Object Notation
// JSON is a syntax for storing and exchanging data
// JSON is text, written with JavaScript object notation

const bioData={
    name: "Sai Praneeth",
    age: 21,
    Skills : "MERN",
};
console.log(bioData);

// convert JSON to string
const myData=JSON.stringify(bioData);

myfs.writeFile('bioData.json',myData,()=>{
    console.log('File is created');
});

