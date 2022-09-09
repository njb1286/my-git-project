import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

import { library, Library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLocationDot, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import Homepage from './homepage';
import Ninja from './pages/ninja/main';
import CodingClass from "./pages/first-coding-class-remake/main";
import VirtualDesktop from './pages/virtual-desktop/main';

import pageStats from "./page-stats";

library.add(faCircleUser, faPhoneVolume, faLocationDot);

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      pages: [
        {
          title: "Ninja Warrior Remake",
          bodyStyles: "background-color: black;",
          path: "ninja",
          component: <Ninja />,
          exact: false
        },

        {
          title: "Coding Class Remake",
          bodyStyles: "margin: 0;",
          path: "coding-class",
          component: <CodingClass />,
          exact: false
        },

        {
          title: "Virtual Desktop",
          bodyStyles: "margin: 0;",
          path: "virtual-desktop",
          component: <VirtualDesktop />,
          exact: false
        }
      ]
    }
  }
  
  render() {
    return (
      <Router>

        <Switch>
          {
            this.state.pages.map(
              page => <Route exact={page.exact} key={this.state.pages.indexOf(page)} path={`/${page.path}`} render={() => {
                  pageStats({title: page.title, bodyStyles: page.bodyStyles});
                  return page.component;
                }}/>
              )
            }

          <Route path="/" render={() => {
            pageStats({title: "Homepage", bodyStyles: "background-color: white;"});
            return <Homepage pages={this.state.pages} />;
          }}/>

        </Switch>

      </Router>
    )
  }
}