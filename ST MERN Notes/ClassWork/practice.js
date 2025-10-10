var getfullName=(firstName)=>{
    const lastName="Mokalla";
    return `${firstName} ${lastName}`;
}

let a=getfullName("Sai praneeth");
console.log(a);
console.log(getfullName("sai"));
console.log(getfullName);
// getfullName = 7; // as let is being used the variable ids being reassigned
console.log(getfullName);