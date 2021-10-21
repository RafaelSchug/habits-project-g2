import UserDashboardCard from "../../components/UserDashboardCard";
import UserDashboardForm from "../../components/UserDashboardForm";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Container from "./style";
import {BsCheckLg, BsClockHistory, BsBarChartLine} from 'react-icons/bs';
import {BiCategory} from 'react-icons/bi';
import dashboardUserbg from '../../assets/vectors/background_dashboard_user.svg';
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from "react-router";
import { useUserDashboard } from "../../providers/userDashboard";
import { useEffect } from "react";
import { useAuth } from "../../providers/auth";
import { useModal } from "../../providers/modal";
import ModalContact from "../../components/ModalContact";
import Modal from "../../components/Modal";
import { useSidebar } from "../../providers/sidebar";


const Dashboard = () => {
    
    const history = useHistory();
    const { habits, updateHabit, deleteHabit, createHabit, getHabits} = useUserDashboard();
    const {token, isAuth, writeToken, setIsAuth} = useAuth();
    const { openModalContact, setOpenModalContact } = useModal();
    const { closeSidebar } = useSidebar();

    const schema = yup.object().shape({
        title: yup.string().required('*Título obrigatório'),
        category: yup.string().required('*Categoria obrigatória'),
        difficulty: yup.string().required('*Dificuldade obrigatória'),
        frequency: yup.string().required('*Frequência obrigatória')
    })

    const { register, handleSubmit, formState : {errors}, reset } = useForm({ resolver: yupResolver(schema)});

    const handleForm = (data) => {
        createHabit(data);
        reset();
    }

    if(!isAuth){
        history.push('/login');
    } 

    useEffect(()=> {
        getHabits(token);
    }, [])

    const handleClick = (path) => {
        if (path === "/") {
            localStorage.clear();
            writeToken(false);
            setIsAuth(false);
        }
        history.push(path);
    };

    const handleContact = () => {
        setOpenModalContact(true)
        closeSidebar()
    }
    
    return (
        <>
        {openModalContact && <Modal><ModalContact /></Modal>}
        <Header buttonText='Logout' buttonUrl='/'></Header>
        <Sidebar>
            <div>
                <button onClick={()=> history.push('/dashboard')}>Hábitos</button>
                <button onClick={()=> history.push('/groups')}>Grupos</button>
                <button onClick={handleContact} >Contato</button>
            </div>
            <div>
                <button onClick={()=> {handleClick('/')}}>Logout</button>
            </div>
        </Sidebar>

        {openModalContact && <Modal > <ModalContact /> </Modal>}

        <Container backgroundSvg={dashboardUserbg}>
            <div className='left_container'>
                <UserDashboardForm>
                    <h2>Adicionar Hábito</h2>
                    <form onSubmit={handleSubmit(handleForm)}>
                        <div>
                            <label htmlFor="title_field">{errors.title?.message}</label>
                            <input id='title_field' type="text" placeholder='Título' {...register('title')}/>
                        </div>
                        <div>
                        <label htmlFor="category_field">{errors.category?.message}</label>
                            <input id='category_field' type="text" placeholder='Categoria' {...register('category')}/>
                        </div>
                        <div className='flex'>
                            <div>
                                <label htmlFor="difficulty_field">{errors.difficulty?.message}</label>
                                <input id='difficulty_field' type="text" placeholder='Dificuldade' {...register('difficulty')}/>
                            </div>
                            <div>
                                <label htmlFor="frequency_field">{errors.frequency?.message}</label>
                                <input id='frequency_field' type="text" placeholder='Frequência' {...register('frequency')}/>
                            </div>
                        </div>
                        <button type='submit'>Adicionar</button>
                    </form>
                </UserDashboardForm>
            </div>
            <div className='right_container'>
                {habits.map(({id, title, category, difficulty, frequency, achieved, how_much_achieved}, index) => {
                    return (
                        <UserDashboardCard key={index}>
                        <div className='flex'>
                            <div className='info_wrapper'>
                                <div className='title_content'>
                                    {/* <span className='hover_content'>{title}</span>   */}
                                    <h2 title={title}>{title}</h2>
                                </div>
                                <p><BsClockHistory/> Frequência: {frequency}</p>
                                <p><BiCategory/> Categoria: {category}</p>
                                <p><BsBarChartLine/> Dificuldade: {difficulty}</p>
                            </div>
                            <div className='progress_wrapper'>
                                <div className='progress_bar' style={{width: `${how_much_achieved}%`}}></div>
                            </div>
                        </div>
                        <div className='button_wrapper'>
                            {achieved && <button className='achieved'><BsCheckLg/>Concluido</button>}
                            {!achieved && <button className='checkin' onClick={() => updateHabit(id)}>Check-in</button>}
                            <button className='remove' onClick={() => deleteHabit(id)}>Deletar</button>
                        </div>
                    </UserDashboardCard>
                    )
                })}
            </div>
        </Container>
        </>
    )
}

export default Dashboard;
