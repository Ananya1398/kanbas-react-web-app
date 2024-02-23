import ModuleList from "../Modules/list";
import Status from "../Status";
function Home() {
  return (
    <div className ="row">
    <div className = "col-md-9">  
    <ModuleList />
   </div>
   <div className = "col-md-3" >
   <Status/>
    </div>
    </div>
  );
}
export default Home;