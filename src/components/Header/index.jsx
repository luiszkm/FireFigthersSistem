import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

import { Logo } from "../Logo"
import { Button } from "../Button"
import { SearchBar } from "../SearchBar"

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { AiOutlineAlert, AiOutlineUser , AiOutlineUsergroupAdd} from "react-icons/ai"
import { ImExit } from "react-icons/im"
import { FiHexagon } from "react-icons/fi"

import { Container, Nav } from "./styles";


export function Header() {

  const { signOut, user, admin, } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  return (
    <Container>

      <Logo className="logo"
        icon={<FiHexagon className="icon2" size={25} />}
        title="SC"
      />

      <Nav>
        {admin ? <Link to="/register">
          <AiOutlineUsergroupAdd />
          Cadastrar Novo Colaborador
        </Link> : ""}
        {!admin ?
          <Link to="/favorites">
            <AiOutlineAlert />
            Minhas OcorrĂȘncias
          </Link> :
          <Link to="/administrator">
            <AiOutlineUser />
            OcorrĂȘncias
          </Link>
        }

        <Link to="/profile">
          <img src={avatarUrl} />
        </Link>

        <Link to="/" onClick={signOut}>
          <ImExit color="#FFFFFF" size={25} />
        </Link>
      </Nav>


    </Container>
  )
}