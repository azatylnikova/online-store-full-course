import React, { useContext } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {authRoutes, publicRoutes} from '../routes'
import { SHOP_ROUTE } from '../utils/consts';
import {Context} from '../index'

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    const isAuth = true
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exact></Route>
            )}
             {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} Component={Component} exact></Route>
            )}

        </Routes>
    );
};

export default AppRouter;