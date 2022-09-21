import React, { useEffect, useState } from 'react';
import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../TextArea';
import { Button } from "../Button"
import { api } from "../../services/api"
import { Form, Container, DivRow, Div, Grid, CalledItemContainer } from "./styles"
import { useAuth } from '../../hooks/auth';
import { CalledItem } from '../CalledItem';

export function FormPage() {
  const { user } = useAuth()
  const [userName, setUserName] = useState(user.name);

  //victim Datas
  const [type, setType] = useState('lojista');
  const [victimName, setVictimName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [sexo, setSexo] = useState('M');
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
  const [transmission, setTransmission] = useState('');
  const [coming, setComing] = useState('');
  const [exit, setExit] = useState('');
  const [release, setRelease] = useState('');

  const [newTrauma, setNewTrauma] = useState('');
  const [traumas, setTraumas] = useState([]);

  const [newClinical, setNewClinical] = useState('');
  const [clinical, setClinical] = useState([]);

  const [newWound, setNewWound] = useState('');
  const [wounds, setWounds] = useState([]);

  const [newProcedure, setNewProcedure] = useState('');
  const [procedures, setProcedures] = useState([]);

  const [newUsedMaterial, setNewUsedMaterial] = useState('');
  const [usedMaterials, setUsedMaterials] = useState([]);

  function handleAddTrauma() {
    setTraumas(prevState => [...prevState, newTrauma])
    setNewTrauma("")
  }
  function handleDeleteTrauma(itemDeleted) {
    setTraumas(prevState => prevState.filter(trauma => trauma !== itemDeleted))
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////
  function handleAddClinical() {
    setClinical(prevState => [...prevState, newClinical])
    setNewClinical("")
  }
  function handleDeleteClinical(itemDeleted) {
    setClinical(prevState => prevState.filter(clinical => clinical !== itemDeleted))

  }
  ///////////////////////////////////////////////////////////////////////////////////////
  function handleAddWound() {
    setWounds(prevState => [...prevState, newWound])
    setNewWound("")
  }
  function handleDeleteWound(itemDeleted) {
    setWounds(prevState => prevState.filter(wound => wound !== itemDeleted))
  }
  /////////////////////////////////////////////////////////////////////////////////////////
  function handleAddProcedures() {
    setProcedures(prevState => [...prevState, newProcedure])
    setNewProcedure("")
  }
  function handleDeleteProcedures(itemDeleted) {
    setProcedures(prevState => prevState.filter(procedures => procedures !== itemDeleted))
  }
  //////////////////////////////////////////////////////////////////////////////////////////  
  function handleAddMaterial() {
    setUsedMaterials(prevState => [...prevState, newUsedMaterial])
    setNewUsedMaterial("")
  }
  function handleDeleteMaterial(itemDeleted) {
    setUsedMaterials(prevState => prevState.filter(material => material !== itemDeleted))
  }


  async function handleNewCalled(e) {
    e.preventDefault()

    try {
      await api.post('/called',
        {
          userName,
          type, victimName, age, sexo, phone,
          rg, escortPhone, escortName,
          pa1, timePa1, pa2, timePa2,
          temperature, pulse, spo2,
          victimDestiny, descriptions,
          coming, exit, release,
          street, medicines,
          transmission,
          number,
          district,
          city,
          traumas,
          clinical,
          wounds,
          procedures, usedMaterials,
        }
      )

      alert("Nota criada coim sucesso")

    } catch (error) {
      console.error(error);
      alert("Não foi possível cadastrar seu chamado")
    }
  }

  let taa = {
    "type": type,
    "victimName": victimName,
    "age": age,
    "phone": phone,
    "rg": rg,
    "sexo": sexo,
    "escortName": escortName,
    "escortPhone": escortPhone,
    "medicines": medicines,
    "traumas": traumas,
    "clinical": clinical,
    "wound": wounds,
    "street": street,
    "number": number,
    "district": district,
    "city": city,
    "pa1": pa1,
    "timePa1": timePa1,
    "pa2": pa2,
    "timePa2": timePa2,
    "temperature": temperature,
    "pulse": pulse,
    "spo2": spo2,
    "procedures": procedures,
    "usedMaterial": usedMaterials,
    "victimDestiny": victimDestiny,
    "descriptions": descriptions

  }

  return (
    <Container>
      <Form id="chamados">

        <strong>Dados da vitima</strong>

        <Input type="text" placeholder="Nome"
          onChange={e => { setVictimName(e.target.value) }} />

        <DivRow>

          <Select onChange={e => setType(e.target.value)} />

          <Input type="number" placeholder="Idade"
            onChange={e => setAge(e.target.value)} />

          <div>
            <label htmlFor="">
              M
              <input type="radio" value="M" name="sexo"
                onChange={e => setSexo(e.target.value)} />
            </label>

            <label htmlFor="F">F
              <input type="radio" value="F" name="sexo"
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
            onChange={e => setMedicines(e.target.value)}
          />
          <Input name="Destino da vitima"
            placeholder="Ex: hospital"
            onChange={e => setVictimDestiny(e.target.value)}
          />
        </Div>

        <CalledItemContainer>
          <label htmlFor="">Ocorrência Traumas</label>

          <div className='content'>

            {
              traumas.map((trauma, index) => (
                <CalledItem
                  key={String(index)}
                  value={trauma}
                  onClick={() => handleDeleteTrauma(trauma)} />
              ))
            }

            <CalledItem
              isNew
              placeholder="Ex: Agressão física"
              value={newTrauma}
              onChange={e => setNewTrauma(e.target.value)}
              onClick={handleAddTrauma} />

          </div>

        </CalledItemContainer>

        <CalledItemContainer>
          <label htmlFor="">Ocorrência Clínica</label>

          <div className='content'>

            {
              clinical.map((clinical, index) => (
                <CalledItem
                  key={String(index)}
                  value={clinical}
                  onClick={() => handleDeleteClinical(clinical)} />
              ))
            }

            <CalledItem
              isNew
              placeholder="Ex: Convulsão"
              value={newClinical}
              onChange={e => setNewClinical(e.target.value)}
              onClick={handleAddClinical} />

          </div>

        </CalledItemContainer>

        <CalledItemContainer>
          <label htmlFor="">Principais Lesões</label>

          <div className='content'>

            {
              wounds.map((wound, index) => (
                <CalledItem
                  key={String(index)}
                  value={wound}
                  onClick={() => handleDeleteWound(wound)} />
              ))
            }

            <CalledItem
              isNew
              placeholder="Ex:Queimadura-face"
              value={newWound}
              onChange={e => setNewWound(e.target.value)}
              onClick={handleAddWound} />

          </div>

        </CalledItemContainer>

        <CalledItemContainer>
          <label htmlFor="">Procedimentos Efetuados</label>

          <div className='content'>

            {
              procedures.map((procedures, index) => (
                <CalledItem
                  key={String(index)}
                  value={procedures}
                  onClick={() => handleDeleteProcedures(procedures)} />
              ))
            }

            <CalledItem
              isNew
              placeholder="Ex:Colar cervical"
              value={newProcedure}
              onChange={e => setNewProcedure(e.target.value)}
              onClick={handleAddProcedures} />

          </div>

        </CalledItemContainer>

        <CalledItemContainer>
          <label htmlFor="">Materiais Utilizados</label>

          <div className='content'>

            {
              usedMaterials.map((material, index) => (
                <CalledItem
                  key={String(index)}
                  value={material}
                  onClick={() => handleDeleteMaterial(material)} />
              ))
            }

            <CalledItem
              isNew
              placeholder="Ex:Luva-01"
              value={newUsedMaterial}
              onChange={e => setNewUsedMaterial(e.target.value)}
              onClick={handleAddMaterial} />

          </div>

        </CalledItemContainer>



        <Grid >
          <Input
            id="transmission"
            name="Transmissão"
            type="time"
            placeholder="Transmissão"
            onChange={e => setTransmission(e.target.value)} />
          <Input id="coming"
            name="Chegada"
            type="time"
            placeholder="Chegada "
            onChange={e => setComing(e.target.value)} />
          <Input
            id='exit'
            name="Saida"
            type="time"
            placeholder="Saida"
            onChange={e => setExit(e.target.value)} />
          <Input
            id='release'
            name="Liberação"
            type="time"
            placeholder="Liberação"
            onChange={e => setRelease(e.target.value)} />
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