import React from 'react';

import Lnk from "./helpers/nav-link";
import Home from './pages/home';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';

export const pages = [
    {
        name: "Home",
        path: "",
        component: <Home />,
        exact: true
    },
    {
        name: "About",
        path: "about",
        component: <About />,
        exact: false
    },
    {
        name: "Menu",
        path: "menu",
        component: <Menu />,
        exact: false
    },
    {
        name: "Contact",
        path: "contact",
        component: <Contact />,
        exact: false
    }
]

export const makeLinks = () => pages.map(page => <Lnk key={Math.floor(Math.random() * 100000)} exact={page.exact} to={page.path} text={page.name} />);