 
import { Route, Routes } from "react-router-dom"
 
 
import { GymDetail } from "./components/GymDetail"
 
import { Gym } from "./Pages/Gym"

function App() {
  

  return (
     <>
    
     <Routes>
        
        <Route path="/" element={<Gym/>}/>
        <Route path="/gym/:user_id" element={<GymDetail/>}/>
     </Routes>
  
     
     </>
  )
}

export default App
