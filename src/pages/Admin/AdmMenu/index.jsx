import { useState } from "react";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Input } from "../../../components/Input";
import { Section } from "../../../components/Section";
import { Textarea } from "../../../components/TextArea";
import { IngredientItem } from "../../../components/IngredientItem";
import { Container, ImageProduct, Form, ImageFile, Select } from "./styles";

import { useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";

import { AiOutlineUpload } from "react-icons/ai";

export function AdmMenu() {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [inventory, setInventory] = useState('')
  const [category, setCategory] = useState('')


  const [image, setImage] = useState()
  const [imageFile, setImageFile] = useState(null)

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient('')
  }
  function handleDeleteIngredient(ingredientDeleted) {
    setIngredients(prevState => prevState
      .filter(ingredient => ingredient !== ingredientDeleted))
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file)
    setImage(imagePreview);
  }

  async function handleAddNewProduct(event) {
    event.preventDefault()
    if (!title || !price || !category || !inventory || !description || !imageFile
    ) {
      return alert("Todos os Campos são obrigatórios ")
    }
    if (newIngredient) {
      return alert("clique no '+' para adicionar o Ingrediente ")
    }
    try {
      const fileUploadForm = new FormData();
      fileUploadForm.append("title", title);
      fileUploadForm.append("price", price);
      fileUploadForm.append("description", description);
      fileUploadForm.append("inventory", inventory);
      fileUploadForm.append("category", category);
      fileUploadForm.append("ingredients", JSON.stringify(ingredients));
      fileUploadForm.append("image", imageFile);

      api.post("/products", fileUploadForm);

      alert("Produto adicionado com sucesso")
      navigate("/");

    } catch (error) {
      alert("Não foi possível adicionar o produto, se o error persistir contate o administrator")
    }
  }
  return (
    <Container>
      <Header />
      <Section>
        <Form >
          <ImageFile>
            <label htmlFor="addImg">
              <img src={image} alt="adicione a foto do seu produto" />
            </label>

          </ImageFile>
          <div>
            <ImageProduct>
              <span>Imagem do parto</span>
              <label htmlFor="addImg">
                <AiOutlineUpload size={25} />
                Selecione uma Imagem
                <input onChange={handleChangeImage}
                  type="file" id="addImg" className="sr-only" />
              </label>
            </ImageProduct>
            <Input onChange={e => setTitle(e.target.value)}
              name="Nome" placeholder=" Ex: Sorvete" />
          </div>

          <div className="ingredientContainer">
            <span>Ingredientes</span>
            <div className="ingredients">
              {
                ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={index}
                    value={ingredient}
                    onClick={() => handleDeleteIngredient(ingredient)} />
                ))

              }
              <IngredientItem isNew
                placeholder="Adicionar"
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient} />

            </div>
          </div>
          <div>

            <Input onChange={e => setPrice(e.target.value)}
              name="Preço" type="number"
              placeholder="R$ 00,00" />



            <Input value={category} name="Category"
              placeholder="Selecione uam categoria" className="hide"
              outer={
                <select name="category" onChange={e => setCategory(e.target.value)}>
                  <option value="Pratos Principais">Pratos Principais</option>
                  <option value="Sobremesas">Sobremesas</option>
                  <option value="Bebidas">Sobremesas</option>
                  <option value="Outros">Outros</option>
                </select>} />
            <Input onChange={e => setInventory(e.target.value)}
              name="Estoque" type="number"
              placeholder="quantia em estoque" />
          </div>
          <Textarea onChange={e => setDescription(e.target.value)}
            name="Descrição"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

          <Button onClick={handleAddNewProduct}
            title="Adicionar Produto" />

        </Form>
      </Section>

      <Footer />
    </Container>
  )
}