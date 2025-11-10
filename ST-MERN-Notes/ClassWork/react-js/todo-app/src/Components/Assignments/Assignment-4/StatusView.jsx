import Data from "./data";
import Empty from "./Empty"
import Failed from "./Failed"
import Idle from "./Idle"
import Loading from "./Loading"

function StatusView({ status, data }) {
  // map each status to a JSX view
  const views = {
    idle:    <Idle/>,
    empty: <Empty/>,
    loading: <Loading/>,
    error:   <Failed/>,
    ready:   <Data data={data} color="red"/>
  };

  // pick the view by key; fallback to null if unknown
  return views[status] ?? null;
}
export default StatusView;