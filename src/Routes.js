import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Root from './Pages/HomePage';
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import BookPage from "./Pages/BookPage"
import history from './history';
import HomePage from "./Pages/HomePage"
import SearchPage from "./Pages/Patient/Search/Search";
import PatientDashboard from "./Pages/Patient/Dashboard"
import DoctorDashboard from "./Pages/Doctor/Dashboard"
import PatientProfile from "./Pages/Patient/Profile"
import DoctorProfile from "./Pages/Doctor/Profile"
import ViewPatients from "./Pages/Doctor/Patients"
import DoctorMessaging from "./Pages/Doctor/Messaging"
import PatientRemindersPage from "./Pages/Patient/RemindersPage"
import PatientMessaging from "./Pages/Patient/Messaging"
import MedicalHistoryEdit from "./Pages/Doctor/PatientProfile"
import Appointmentss from './Pages/Doctor/Appointmentss'

import Home from "./Pages/AdminPanel/Home";
import VerifyDoctor from "./Pages/AdminPanel/VerifyDoctor";
import BanAccount from "./Pages/AdminPanel/BanAccount";
import ViewReports from "./Pages/AdminPanel/ViewReports";
import ViewRatings from "./Pages/AdminPanel/ViewRatings";
import Settings from "./Pages/AdminPanel/Settings";




function Routes() {
    return (
        <Router history={history}>
            <Switch>


            
                <Route path="/" exact component={HomePage} />
                <Route path="/SignInPage" exact component={SignInPage} />
                <Route path="/SignUpPage" exact component={SignUpPage} />
                <Route path="/BookPage" exact component={BookPage} />

                <Route path="/PatientDashboard" exact component={PatientDashboard} />
                <Route path="/PatientProfile" exact component={PatientProfile} />
                <Route path="/PatientRemindersPage" exact component={PatientRemindersPage} />
                <Route path="/PatientMessaging" exact component={PatientMessaging} />
                <Route path="/SearchPage" exact component={SearchPage} />

                <Route path="/DoctorDashboard" exact component={DoctorDashboard} />
                <Route path="/DoctorProfile" exact component={DoctorProfile} />
                <Route path="/ViewPatients" exact component={ViewPatients} />
                <Route path="/DoctorMessaging" exact component={DoctorMessaging} />
                <Route path="/Appointmentss" exact component={Appointmentss} />
                
                <Route path="/MedicalHistoryEdit/:id?" exact component={MedicalHistoryEdit} />
              
              
                {/* <Route path="/" exact component={Home} /> */}
                <Route path="/Home" exact component={Home} />
                <Route path="/VerifyDoctor" exact component={VerifyDoctor} />
                <Route path="/BanAccount" exact component={BanAccount} />
                <Route path="/ViewReports" exact component={ViewReports} />
                <Route path="/ViewRatings" exact component={ViewRatings} />
                <Route path="/Settings" exact component={Settings} />



            </Switch>
        </Router>
    )
}

export default Routes;
