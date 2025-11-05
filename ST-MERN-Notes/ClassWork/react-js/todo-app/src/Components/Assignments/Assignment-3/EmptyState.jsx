
function EmptyState(props){
    return (
        <>
        <p style={{ color: "red" }}>Error: {props.error}</p>
        {
        
          console.log(props.error)
        }
        {

          console.log(props.loading)
        }
        <button className="font-bold text-red-500">Retry</button>
      </>
    )
}
export default EmptyState;