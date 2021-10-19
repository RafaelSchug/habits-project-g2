import { Redirect, useHistory } from "react-router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import groupsImage from "../../assets/vectors/background_dashboard_groups.svg"
import { Container } from "./style";
import { useState } from "react";
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../services/api";
// import { useAuth } from "../../providers/auth";

const GroupList = () => {

  const history = useHistory()

  // const { token, isAuth } = useAuth()

  const [token, setToken] = useState(() => {
    const localToken = localStorage.getItem("token")
    if (localToken) {
      return JSON.parse(localToken)
    } else {
      <Redirect to="/" />
    }
  })

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório*"),
    description: yup
      .string()
      .required("Campo obrigatório*"),
    category: yup
      .string()
      .required("Campo obrigatório*")

  })

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    console.log(data)
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        console.log(response.data)
        reset()
      })
      .catch(err => console.log(err))

  }

  const handleNavigation = (path) => {
    history.push(path)
  }

  return (
    <div>
      <Header buttonText="Logout" buttonUrl="/" />
      <Sidebar>
        <div>
          <button onClick={() => handleNavigation("/dashboard")} >Dashboard</button>
          <button onClick={() => handleNavigation("/groups")} >Grupos</button>
          <button>Ajuda</button>
          <button>Contato</button>
        </div>

        <div>
          <button onClick={() => handleNavigation("/")} >Logout</button>
        </div>
      </Sidebar>

      <Container>
        <img src={groupsImage} alt="groups illustration" />

        <div id="content" >
          <div id="formContainer" >
            <h2>Criar Grupo</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="inputs" >
                <label>{errors.name?.message}</label>
                <input type="text" placeholder="Nome" {...register("name")} />
              </div>

              <div className="inputs" >
                <label>{errors.description?.message}</label>
                <input type="text" placeholder="Descrição" {...register("description")} />
              </div>

              <div className="inputs" >
                <label>{errors.category?.message}</label>
                <input type="text" placeholder="Categoria" {...register("category")} />
              </div>
              <button id="addButton" type="submit" >Adicionar</button>
            </form>
          </div>

          <div id="groupsContainer" >
            <div id="groupSearch" >

            </div>

            <div id="groups" >

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GroupList;
