import React , {useContext} from 'react';
import { Context } from '..';

import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { SHOP_ROUTE } from '../utils/consts';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        
     <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink style={{color: 'white'}} to={SHOP_ROUTE} >Online-Store</NavLink>
                    {user.isAuth ?
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                            <Button value={'outline-light'}>Админ панель</Button>
                            <Button value={'outline-light'}>Войти</Button>
                            </Nav.Link>
                    </Nav>
                    :
                    <Nav className="me-auto">
                        <Nav.Link href="#home">
                            <Button value={'outline-light'}>Авторизация</Button>
                            </Nav.Link>
                    </Nav>}

                </Container>
            </Navbar>
          
    );
};

export default NavBar;