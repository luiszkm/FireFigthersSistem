import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../../services/api"
import { jsPDF } from "jspdf"

import { CardPreview } from "../../../components/CardPreview"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";
import { Container } from "./styles";

import { AiOutlineFilePdf } from "react-icons/ai";



export function Details() {
  const [data, setData] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  console.log(data.id);


  function handleOpenPdf() {
    const doc = new jsPDF()

    doc.setFontSize(30);
    doc.setFont("helvetica", "bold")
    doc.text("Atendimento bombeiro Civil", 105, 40, null, null, "center");

    doc.setFontSize(16);
    doc.setFont("helvetica", "normal")
    doc.text(`Responsável pelo chamado: ${data.user_name}`, 10, 60);
    doc.text(` ${data.created_at}`, 150, 60);

    doc.text(`Nome da vitima: ${data.victim_name}`, 10, 70);
    doc.text(`tipo: ${data.type}`, 150, 70);
    doc.text(`Idade: ${data.age} - Rg: ${data.rg} - Sexo: ${data.sexo} - Tel: ${data.phone}`, 10, 80);
    doc.text(`Acompanhante: ${data.escortName} - Acompanhante tel: ${data.escortPhone}`, 10, 90);

    doc.setFont("helvetica", "bold")
    doc.text("Endereço", 105, 100, null, null, "center");
    doc.setFont("helvetica", "normal")

    doc.text(`Rua: ${data.street},   N°: ${data.number},  Bairro: ${data.district},  Cidade: ${data.city}`, 10, 110);

    doc.setFont("helvetica", "bold")
    doc.text("Controle de Atendimento", 105, 120, null, null, "center");
    doc.setFont("helvetica", "normal")



    doc.text(`Medicamentos usado pela vitima: ${data.medicines}`, 10, 130)
    doc.text(`1°PA: ${data.pa1} hora: ${data.timePa1} | 2°PA: ${data.pa2} hora : ${data.timePa2}`, 10, 140)
    doc.text(`Traumas: ${data.traumas.map(name => name.traumas_name)}`, 10, 150)
    doc.text(`Clinico: ${data.clinical.map(name => name.clinical_name)}`, 10, 160)
    doc.text(`Lesões: ${data.wound.map(name => name.wound_name)}`, 10, 170)


    doc.setFont("helvetica", "bold")
    doc.text("Procedimentos", 105, 180, null, null, "center");
    doc.setFont("helvetica", "normal")

    doc.text(`Temperatura: ${data.temperature} | Pulso: ${data.pulse} | SPO²%: ${data.spo2}`, 10, 190)
    doc.text(`Transmissão: ${data.transmission} | Chegada: ${data.coming} | Saída: ${data.exit} | Liberação: ${data.release}`, 10, 200)
    doc.text(`Materiais Usados: ${data.procedures.map(name=> name.material_name)}`, 10, 210)
    doc.text(`Procedimentos Efetuados: ${data.procedures.map(name => name.procedures_name)}`, 10, 220)
    doc.text(`Transmissão ${data.transmission} | Chegada: ${data.coming} | Saída: ${data.exit} | Liberação: ${data.release} `, 10, 230)
    doc.text(`Procedimentos Detalhados:${data.descriptions}`, 10, 240)


    doc.save(`relatório-${data.id}.pdf`);

  }


  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/called/${params.id}`)
      setData(response.data)
    } fetchNote()


  }, [])

  return (
    <Container>
      <Header />
      <Section>
        <CardPreview data={data} />
        <Button title="Baixar em PDF"
          icon={<AiOutlineFilePdf size={25} />}
          onClick={handleOpenPdf} />
      </Section>
      <Footer />
    </Container>
  )
}