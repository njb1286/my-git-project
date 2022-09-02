import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Switch, Route
} from 'react-router-dom';

import { pages } from './pages-list';
import Footer from './footer';
import Home from './pages/home';


export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='coding-class-site'>
                <Router>
                    <Switch>
                        {
                            pages.map(page => {
                                return <Route key={page.name} exact={page.exact} path={`/coding-class/${page.path}`} render={() => page.component} />
                            })
                        }
                    </Switch>

                <br />
                <br />
                <br />

                    <Footer />
                    
                </Router>                

            </div>
        )
    }
}