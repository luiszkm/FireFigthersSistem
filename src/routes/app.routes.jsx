import { Routes, Route } from "react-router-dom";

import{Home} from "../pages/client/Home"
import{Details} from "../pages/client/Details"
import{Profile} from "../pages/client/Profile"
import{Favorites} from "../pages/client/Favorites"

export function AppRoutes(){

  return(
    
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/details/:id" element ={<Details />}/>
    
      <Route path="/profile" element ={<Profile />}/>
      <Route path="/favorites" element ={<Favorites />}/>
      
    </Routes>
  )
}