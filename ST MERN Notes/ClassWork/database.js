const studentTribe = [];
console.log(studentTribe);

let sai = {
    name :"sai",
    dob : "07-07-2004",
    hasGratuated : true,
}

let praneeth = {
    name:"praneeth",
    dob:"07-07-2004",
    hasGratuated:true
}

studentTribe.push(sai.name="starboy",sai.dob="7th july 2004");
studentTribe.push(praneeth);



console.log(studentTribe);


//arrow function
const student = (name , age, id , grade)=>{
    let students = {
        name : name,
        age : age,
        id : id,
        grade : grade
    }
    studentTribe.push(students);

}

