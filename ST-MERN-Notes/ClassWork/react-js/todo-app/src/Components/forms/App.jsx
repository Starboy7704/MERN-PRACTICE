import ControlledFromApp from "./ControlledFormApp";
import UncontrolledFormApp from "./UncontrolledFormApp";

function App(){
    return(
        <div className="h-screen bg-red-300">
        <UncontrolledFormApp/>
        <ControlledFromApp/>

        </div>
    )
}
export default App;