 
import { Route, Routes } from "react-router-dom"
import { Banner } from "./components/Banner"
import { Footer } from "./components/Footer"
 
import { GymDetail } from "./components/GymDetail"
import { Navbar } from "./components/Navbar"
import { Gym } from "./Pages/Gym"

function App() {
  

  return (
     <>
    
     <Routes>

        <Route path="/gym" element={<Gym/>}/>
        <Route path="/gym/:user_id" element={<GymDetail/>}/>
     </Routes>
  
     
     </>
  )
}

export default App
