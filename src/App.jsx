import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
    <Router>
       <Routes>
         <Route path="/" element={<Dashboard/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
       </Routes>
    </Router>
    </div>
  )
}

export default App;
