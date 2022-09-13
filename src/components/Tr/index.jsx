import { Container } from "./styleds";

import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

export function Tr({data}) {
  
  const navigate = useNavigate()

  function handleDetails(id){
    navigate(`/details/${id}`)
  }


  return (
    <Container>
      <td>
          <AiFillEye size={25}
          onClick={() => handleDetails(data.id)}/> 
      </td>
    
      <td>{data.id}</td>
      <td>{data.type}</td>
      <td>{data.victim_name}</td>
      <td>{data.age}</td>
      <td>{data.phone}</td>
      <td>{data.sexo}</td>
      <td>{data.rg}</td>
      <td>{data.escortName}</td>
      <td>{data.escortPhone}</td>
      <td>{data.created_at}</td>
      
    </Container>
  )
}