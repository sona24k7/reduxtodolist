import React from 'react';
import App from "./App";
import Loginrequest from "../containers/login";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"


const Apps = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Loginrequest} />
                <Route path="/App" component={App} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default Apps;