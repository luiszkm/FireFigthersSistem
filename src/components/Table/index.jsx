import { Link } from "react-router-dom";
import { Container, TableContainer } from "./styles";
import { AiFillEye } from "react-icons/ai"

export function Table() {

  return (
    <Container>
      <TableContainer>
        <thead>
          <tr>
            <th></th>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Sexo</th>
            <th>RG</th>
            <th>Telefone</th>
            <th>Acompanhante</th>
            <th>Tel. Acompanhante</th>
            <th>data</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>
              <Link to="/edit">
                <AiFillEye size={25} />
              </Link>
            </td>
            <td>lojista</td>
            <td>irineu galileu</td>
            <td>25</td>
            <td>M</td>
            <td>2505505</td>
            <td>31 336633698</td>
            <td>Creid</td>
            <td>31 989595995</td>
            <td>20/05 às 18h00</td>
          </tr>


        </tbody>
      </TableContainer>
    </Container>
  )
}