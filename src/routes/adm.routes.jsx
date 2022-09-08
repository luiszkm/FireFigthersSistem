import { Routes, Route } from "react-router-dom";

import{Adm} from "../pages/Admin/AdminHome";
import {AdmMenu} from "../pages/Admin/AdmMenu";
import{Edit} from "../pages/Admin/Edit"
import{Profile} from "../pages/client/Profile"

export function AdmRoutes(){

  return(
    <Routes>
      <Route path="/" element ={<Adm />}/>
      <Route path="/administrator" element ={<AdmMenu />}/>
      <Route path="/edit" element ={<Edit />}/>
      <Route path="/profile" element ={<Profile />}/>
    </Routes>
  )
}