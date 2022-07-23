import React from "react";
import { HashRouter,Routes, Route , Link} from "react-router-dom";

import DemandDashboard from "./component/demanddashboard";

const App = () =>{
  return(
    <HashRouter>
      <DemandDashboard/>
   <Routes>
     <Route exact path="/demanddashboard" element={<DemandDashboard/>}/>
   </Routes>
 </HashRouter>
  )
 
}

export default App;