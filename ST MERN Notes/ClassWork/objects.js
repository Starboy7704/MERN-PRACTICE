// let age =24;
// console.log(age);
// let age=21;
// console.log(age);

// const j= "hi";
// console.log(j);
// const j="hello";
// console.log(j);


//object: curly braces key:values, key should be unique
const instagram ={
    username:"sai",
    password:"praneeth"
}
console.log(instagram.username);
const twitter ={
    ...instagram,
    username : "hii",
    password : "123"
}
console.log(twitter);

const a="sai";
const b=a;
b=a;
console.log(b);

function getfullName(firstName){
    const lastName="Mokalla";
    return `${firstName} ${lastName}`;
}
a=getfullName("Sai praneeth");
console.log(a);
console.log(getfullName("sai"));

