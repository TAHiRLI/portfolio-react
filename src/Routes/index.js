import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ROUTES } from '../Consts/Routes';

import Layout from '../Components/Layout';
import Portfolio from '../Components/Portfolio';
import UndexConstruction from '../Components/UnderConstruction';

function Routes() {
    return (
        <Router>
            <Switch>
                {/* Home */}
                <Route exact path={ROUTES.Home} >
                    <Layout content={Portfolio} />
                </Route>

                {/* Skills */}

                <Route exact path={ROUTES.Skills} >
                <div>
                   <h1 className='text-light'>Skills</h1>
                    <UndexConstruction/>
                </div>
                </Route>
                {/* Projects */}

                <Route exact path={ROUTES.Projects} >
                <div>
                   <h1 className='text-light'>Projects</h1>
                    <UndexConstruction/>
                </div>
                </Route>
                {/* Home */}

                <Route exact path={ROUTES.Contact} >
                <div>
                   <h1 className='text-light'>Contact Page</h1>
                    <UndexConstruction/>
                </div>
                </Route>
            </Switch>
        </Router>

    );
}

export default Routes;