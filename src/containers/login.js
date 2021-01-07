import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './style.css'


const Loginrequest = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = `/App`;
        history.push(path);
    }


    return (
        <div>
            <form>
                <h1 className="bg-primary headings">PLEASE LOGIN BELOW</h1>
                <div className="login">
                    <input type="text" placeholder="USERNAME" /><p></p>
                    <input type="password" placeholder="PASSWORD" />
                </div>
                <butoon className="button btn btn-primary" onClick={routeChange}>LOG IN</butoon>
            </form>
        </div >
    )

}
export default connect()(Loginrequest);