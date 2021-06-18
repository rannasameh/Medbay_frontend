import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import history from "../../history";
import Home from "./Home";
import VerifyDoctor from "./VerifyDoctor";
import BanAccount from "./BanAccount";
import ViewReports from "./ViewReports";
import ViewRatings from "./ViewRatings";
import Settings from "./Settings";

function Routes()
{
    return(
        <Router history={history}>
            <Switch>
                <Route path = "/" exact component = {Home} />
                <Route path = "/Home" exact component = {Home} />
                <Route path = "/VerifyDoctor" exact component = {VerifyDoctor} />
                <Route path = "/BanAccount" exact component = {BanAccount} />
                <Route path = "/ViewReports" exact component = {ViewReports} />
                <Route path = "/ViewRatings" exact component = {ViewRatings} />
                <Route path = "/Settings" exact component = {Settings} />
            </Switch>
        </Router>
    )
}
export default Routes;