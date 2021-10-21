import { Redirect, useHistory } from "react-router";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import groupsImage from "../../assets/vectors/background_dashboard_groups.svg"
import { Container, FormContainer, GroupsContainer } from "./style";
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../services/api";
import { useAuth } from "../../providers/auth";
import { useGroupList } from "../../providers/groupList";
import Card from "../../components/GroupCard";
import { useState } from "react";
import { useModal } from "../../providers/modal";
import ModalContact from "../../components/ModalContact";
import Modal from "../../components/Modal";

const GroupList = () => {

  const history = useHistory()

  const [input, setInput] = useState("")

  const { token, isAuth, setIsAuth, writeToken } = useAuth()

  const { groups, next, setGroups, setNext } = useGroupList()

  const { openModalContact, setOpenModalContact } = useModal()

  const filter = groups.filter(element => element.name.includes(input))

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

  if (!token && !isAuth) {
    return <Redirect to="/" />;
  }

  const onSubmit = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(response => {
        reset()
        setGroups([])
        setNext(`https://kenzie-habits.herokuapp.com/groups/`)
      })
      .catch(err => console.log(err))

  }

  const handleNavigation = (path) => {
    history.push(path)
  }

  const handleLogout = (path) => {
    if (path === "/") {
      localStorage.clear();
      writeToken(false);
      setIsAuth(false);
    }
    history.push(path);
  };

  return (
    <div>
      <Header buttonText="Logout" buttonUrl="/" />
      <Sidebar>
        <div>
          <button onClick={() => handleNavigation("/dashboard")} >Hábitos</button>
          <button onClick={() => handleNavigation("/groups")} >Grupos</button>
          <button onClick={() => setOpenModalContact(true)} >Contato</button>
        </div>

        <div>
          <button onClick={() => handleLogout("/")} >Logout</button>
        </div>
      </Sidebar>

      {openModalContact && <Modal > <ModalContact /> </Modal>}

      <Container>
        <img src={groupsImage} alt="groups illustration" />

        <div id="content" >
          <FormContainer>
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
          </FormContainer>

          <GroupsContainer>
            <div id="groupSearch" >
              <h2>Pesquisar Grupo</h2>
              <form id="searchForm" >
                <input value={input} onChange={e => setInput(e.target.value)}
                  id="searchInput" placeholder="Pesquisar por nome" />
                {/* <button id="searchButton" >Pesquisar</button> */}
              </form>
            </div>

            <div id="groups" >
              <div id="groupsContainer">
                {
                  !input ?
                    groups.map((element, index) => (
                      <Card element={element} key={index} />
                    ))
                    :
                    filter.length ?
                      filter.map((element, index) => (
                        <Card element={element} key={index} />
                      ))
                      :
                      next === null ?
                        <div id="notFound" >Nenhum grupo encontrado</div>
                        :
                        <div id="searching" >Carregando...</div>

                }
              </div>

            </div>

            {/* <div id="buttonsContainer" >
              <button onClick={previousPage}>Anterior</button>
              <button onClick={nextPage}>Próxima</button>
            </div> */}
          </GroupsContainer>
        </div>
      </Container>
    </div>
  );
};

export default GroupList;
