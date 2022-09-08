import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { TabCard } from "../../../components/TabCard";
import { Container } from "./styles";


export function Buy(){

  return(
    <Container>
      <Header/>
      <ul>
        <li>
          <TabCard />
        </li>
      </ul>
      <Footer/>
    </Container>
  )
}