import React, { useEffect, useState } from 'react';
import { Input } from '../Input';
import { Textarea } from '../TextArea';
import { Button } from "../Button"
import { api } from "../../services/api"
import { Form, Container, DivRow, Div, Grid } from "./styles"

export function FormPage() {
  //victim Datas
  const [type, setType] = useState('');
  const [victimName, setVictimName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [sexo, setSexo] = useState('');
  const [rg, setRg] = useState('');
  const [escortName, setEscortName] = useState('');
  const [escortPhone, setEscortPhone] = useState('');
  const [medicines, setMedicines] = useState('');

  // victim Address
  const [address, setAddress] = useState({});
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

  // victim attendance
  const [pa1, setPa1] = useState('');
  const [timePa1, setTimePa1] = useState('');
  const [pa2, setPa2] = useState('');
  const [timePa2, setTimePa2] = useState('');
  const [temperature, setTemperature] = useState('');
  const [pulse, setPulse] = useState('');
  const [spo2, setSpo2] = useState('');
  const [victimDestiny, setVictimDestiny] = useState('');
  const [descriptions, setDescriptions] = useState('');

  const [traumas, setTraumas] = useState(["ruma"]);
  const [clinical, setClinical] = useState(["bobqqqqqq", "c22323u"]);
  const [wound, setWound] = useState([{ name: "aaa", local: "aruz" }]);
  const [procedures, setProcedures] = useState(["guy"]);
  const [used_material, setUsed_material] = useState([{ name: "vaca", amount: "bbbb" }]);



  const form = new FormData

  async function handleNewCalled(e) {
    e.preventDefault()
    if (!victimName || !type || !rg || !phone || type === "") {
      return alert("todos os dados da vitima são obrigatórios")
    }
    try {


      form.append("type", type)
      form.append("victim_name", victimName)
      form.append("age", age)
      form.append("phone", phone)
      form.append("rg", rg)
      form.append("sexo", sexo)
      form.append("escortName", escortName)
      form.append("escortPhone", escortPhone)
      form.append("medicines", medicines)
      form.append("street", street)
      form.append("number", number)
      form.append("district", district)
      form.append("city", city)
      form.append("pa1", pa1)
      form.append("timePa1", timePa1)
      form.append("pa2", pa2)
      form.append("timePa2", timePa2)
      form.append("temperature", temperature)
      form.append("pulse", pulse)
      form.append("spo2", spo2)
      form.append("victim_destiny", victimDestiny)
      form.append("descriptions", descriptions)


      await api.post('/called', { 
        type, victim_name:victimName, age, sexo, phone,
        rg, escortPhone, escortName,
        pa1, timePa1, pa2, timePa2,
        temperature, pulse, spo2,
        victim_destiny:victimDestiny, descriptions,
        street, medicines,
        number,
        district,
        city,
        traumas,
        clinical,
        wound,
        procedures, used_material,
       })

      alert("Nota criada coim sucesso")

    }catch(error){
      console.error(error);
      alert("Não foi possível cadastrar seu chamado")
    }
}


  return (
    <Container>
      <Form id="chamados" onChange={e => setType(e.target.value)}>

        <strong>Dados da vitima</strong>

        <Input type="text" placeholder="Nome"
          onChange={e => { setVictimName(e.target.value) }} />

        <DivRow>

          <select onChange={e => setType(e.target.value)} >
            <option value=""></option>
            <option value="Lojista ">Lojista </option>
            <option value=" Colaborador "> Colaborador </option>
            <option value=" Cliente"> Cliente</option>
            <option value=" Terceirizado"> Terceirizado</option>
          </select>

          <Input type="number" placeholder="Idade"
            onChange={e => setAge(e.target.value)} />

          <div>
            <label htmlFor="">
              M
              <input type="radio" value="M" name="sexo"
                onChange={e => setSexo(e.target.value)} />
            </label>

            <label htmlFor="F">F
              <input type="radio" value=" F" name="sexo"
                onChange={e => setSexo(e.target.value)} />
            </label>
          </div>
        </DivRow>

        <Div>
          <Input type="text" placeholder="Rg"
            onChange={e => setRg(e.target.value)} />
          <Input type="text" placeholder="Tel"
            onChange={e => setPhone(e.target.value)} />
        </Div>

        <Div>
          <Input type="text" placeholder="Rua"
            onChange={e => setStreet(e.target.value)} />
          <Input type="text" placeholder="Numero"
            onChange={e => setNumber(e.target.value)} />
        </Div>

        <Div>
          <Input type="text" placeholder="Bairro"
            onChange={e => setDistrict(e.target.value)} />
          <Input type="text" placeholder="Cidade"
            onChange={e => setCity(e.target.value)} />
        </Div>

        <Div>
          <Input type="text" placeholder="Nome Acompanhante"
            onChange={e => setEscortName(e.target.value)} />
          <Input type="number" placeholder="Tel Acompanhante"
            onChange={e => setEscortPhone(e.target.value)} />
        </Div>

        <Div>
          <Input name="Medicamentos utilizados pela vitima"
            placeholder="Ex: DorFlex, 1 comprimido, 9:00"
            onChange={e => setMedicines(e.target.value)} />
          <Input name="Destino da vitima" placeholder="Ex: hospital" />
        </Div>

        <Grid >
          <Input
            id="transmission"
            name="Transmissão"
            type="datetime-local"
            placeholder="Transmissão" />
          <Input name="Chegada"
            type="datetime-local"
            placeholder="Chegada " />
          <Input
            id='exit'
            name="Saida"
            type="datetime-local"
            placeholder="Saida" />
          <Input
            id='release'
            name="Liberação"
            type="datetime-local"
            placeholder="Liberação" />
        </Grid>

        <Grid>
          <Input type="text" placeholder="1°PA"
            onChange={e => setPa1(e.target.value)} />
          <Input type="time" placeholder="hora"
            onChange={e => setTimePa1(e.target.value)} />
          <Input type="text" placeholder="2°PA"
            onChange={e => setPa2(e.target.value)} />
          <Input type="time" placeholder="hora-2"
            onChange={e => setTimePa2(e.target.value)} />
        </Grid>

        <Grid>
          <Input type="text" placeholder="Temperatura"
            onChange={e => setTemperature(e.target.value)} />
          <Input type="text" placeholder="Pulso"
            onChange={e => setPulse(e.target.value)} />
          <Input type="text" placeholder="SPO²%"
            onChange={e => setSpo2(e.target.value)} />
        </Grid>

        <Textarea placeholder="Procedimentos Detalhados Efetuados "
          onChange={e => setDescriptions(e.target.value)} />

        <Button title="Cadastrar Chamado"
          onClick={(e) => { handleNewCalled(e) }} />
      </Form>

    </Container>

  );
}