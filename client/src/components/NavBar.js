import React , {useContext} from 'react';
import { Context } from '..';

import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import {observer} from "mobx-react-lite";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observable } from 'mobx';

import { useNavigate } from 'react-router-dom';

const NavBar = observer( () => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    return (
        
     <Navbar bg="dark" data-bs-theme="dark">
                <Container style={{maxWidth: '100%'}}>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE}  >Online-Store</NavLink>
                    {user.isAuth ?
                    <Nav className="ml-auto">
                       
                          
                                <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>

                        
                            <Button
                            onClick={() => navigate(LOGIN_ROUTE)}
                            variant={"outline-light"}
                            className='mx-2'>
                            Выйти
                        </Button>
                           
                    </Nav>
                    :
                    <Nav className="ml-auto">
                       
                            <Button value={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                           
                    </Nav>}

                </Container>
            </Navbar>
          
    );
})

export default NavBar;