import Header from "../../components/Header";
import { Container } from "./style";
import homeImage from '../../assets/vectors/home.svg'
import { useHistory } from "react-router";

const Home = () => {

    const history = useHistory();

    const handleClick = path => {
        history.push(path);
    }

    return (
        <>
            <Header homePage buttonText='Registrar-se' buttonUrl='/register'></Header>
            <Container>
                <div className='left_container'>
                    <div className='content_wrapper'>
                        <div className='text_content'>
                            <h1>DEV<br />HABITS</h1>
                            <p>Gerencie sua rotina</p>
                            <p>Estabeleça metas</p>
                            <p>Produza com eficiência</p>
                        </div>
                        <img src={homeImage} alt="home image" />
                    </div>
                </div>
                <div className='right_container'>
                    <div className='content_wrapper'>
                        <button className='login_button' onClick={_ => handleClick('/login')}>Login</button>
                        <button className='register_button' onClick={_ => handleClick('/register')}>Registrar-se</button>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default Home;