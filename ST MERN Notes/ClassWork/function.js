function student(name,age,id,grade){
    let students = {
        name : name,
        age : age,
        id:id,
        grade:grade
    }
    // console.log(this);
    studentTribe.push(students);

}
const studentTribe =[];

student("Sai","21","101","A+");
student("Praneeth","21","102","A+");
student("Starboy","21","103","B+");

console.log(studentTribe);


