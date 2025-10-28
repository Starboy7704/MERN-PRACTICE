function OpenRoles(props) {
    console.log(props.dummyOpenRoles);
  return (
    <div className="w-[350px] h-[400px] bg-white">
      <div className="flex justify-between p-3">
        <h2>Open Roles</h2>
        <p>{"->"}</p>
      </div>
      <div>{
        props.dummyOpenRoles.map((ele,index)=>(//first arg element second arg index
            <p key={index}>{ele}</p>
        ))
      }</div>
    </div>
  );
}

export default OpenRoles;
