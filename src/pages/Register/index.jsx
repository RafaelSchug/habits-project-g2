import api from "../../services/api";
import { useHistory, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Content, Container, Background } from "./style";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useModal } from "../../providers/modal";
import ModalAbout from "../../components/ModalAbout";
import ModalContact from "../../components/ModalContact";
import Modal from "../../components/Modal";
import { useSidebar } from "../../providers/sidebar";
import { toast } from "react-toastify";

const Register = () => {
  const history = useHistory();

  const { closeSidebar } = useSidebar();

  const {
    openModalContact,
    openModalAbout,
    setOpenModalContact,
    setOpenModalAbout,
  } = useModal();

  const formSchema = yup.object().shape({
    username: yup.string().required("*Nome de usuário obrigatório"),
    email: yup.string().required("*Email obrigatório").email("Email inválido"),
    password: yup
      .string()
      .required("*Senha obrigatória")
      .min(6, "Senha deve conter 6 ou mais caracteres"),
    confirmation: yup
      .string()
      .required("*Confirmação de senha obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas devem coincidir"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = ({ username, email, password }) => {
    api
      .post("/users/", { username, email, password })
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Email já está em uso!"));
  };

  const handleContact = () => {
    setOpenModalContact(true);
    closeSidebar();
  };

  const handleAbout = () => {
    setOpenModalAbout(true);
    closeSidebar();
  };

  return (
    <div>
      <Header buttonText="Login" buttonUrl="/login" />
      <Sidebar>
        <div>
          <button onClick={handleAbout}>Sobre</button>
          <button onClick={handleContact}>Contato</button>
        </div>
      </Sidebar>
      {openModalContact && (
        <Modal>
          <ModalContact />
        </Modal>
      )}
      {openModalAbout && (
        <Modal>
          <ModalAbout />
        </Modal>
      )}
      <Container>
        <Background />
        <Content>
          <h2>Cadastro</h2>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <div className="error">{errors.username?.message}</div>
            <input placeholder="Usuário" {...register("username")}></input>
            <div className="error">{errors.email?.message}</div>
            <input placeholder="Email" {...register("email")}></input>
            <div className="error">{errors.password?.message}</div>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            ></input>
            <div className="error">{errors.confirmation?.message}</div>
            <input
              type="password"
              placeholder="Confirmar senha"
              {...register("confirmation")}
            ></input>
            <button type="submit">Registrar-se</button>
            <span>
              Já possui uma conta? <Link to="/login">Login</Link>
            </span>
          </form>
        </Content>
      </Container>
    </div>
  );
};

export default Register;
