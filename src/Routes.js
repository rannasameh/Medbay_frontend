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
import EditProfile from "./Pages/Patient/Editprofile"
import Home from "./Pages/AdminPanel/Home";
import VerifyDoctor from "./Pages/AdminPanel/VerifyDoctor";
import BanAccount from "./Pages/AdminPanel/BanAccount";
import ViewReports from "./Pages/AdminPanel/ViewReports";
import ViewRatings from "./Pages/AdminPanel/ViewRatings";
import Settings from "./Pages/AdminPanel/Settings";
 import ViewDoctor from "./Pages/AdminPanel/viewDoctor"
 import EditDoctorProfile from "./Pages/Doctor/EditDoctorProfile"
import ViewTests from "./Pages/Patient/ViewTests"
import ViewDoctors from "./Pages/Patient/ViewDoctors"
import AdminSignIn from "./Pages/AdminPanel/AdminSignIn"
import ViewDoctorProfile from "./Pages/Patient/ViewDoctorProfile"
import PatientTests from "./Pages/Doctor/ViewPatientTests"
import AboutUsPage from "./Pages/AboutUsPage";
import DisclaimerPage from './Pages/Patient/DisclaimerPage'
import ContactUsPage from "./Pages/ContactUsPage";
import ServicesPage from "./Pages/ServicesPage";
import Appointmentss from './Pages/Doctor/Appointmentss';

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                 <Route path="/" exact component={HomePage} /> 
                 <Route path="/aboutus" exact component={AboutUsPage} />
                <Route path="/contactus" exact component={ContactUsPage} />
                <Route path="/services" exact component={ServicesPage} />
                 <Route path="/SignInPage" exact component={SignInPage} />
                <Route path="/SignUpPage" exact component={SignUpPage} />
                <Route path="/BookPage" exact component={BookPage} />

                <Route path="/PatientDashboard" exact component={PatientDashboard} />
                <Route path="/PatientProfile" exact component={PatientProfile} />
                <Route path="/PatientRemindersPage" exact component={PatientRemindersPage} />
                <Route path="/PatientMessaging" exact component={PatientMessaging} />
                <Route path="/SearchPage" exact component={SearchPage} />
                <Route path="/EditProfile" exact component={EditProfile} />
                <Route path="/DisclaimerPage" exact component={DisclaimerPage} />

                <Route path="/DoctorDashboard" exact component={DoctorDashboard} />
                <Route path="/DoctorProfile" exact component={DoctorProfile} />
                <Route path="/ViewPatients" exact component={ViewPatients} />
                <Route path="/DoctorMessaging" exact component={DoctorMessaging} />
                <Route path="/MedicalHistoryEdit/:id?" exact component={MedicalHistoryEdit} /> 
                <Route path="/ViewTests" exact component={ViewTests} />
                <Route path="/ViewDoctors" exact component={ViewDoctors} />
                <Route path="/ViewDoctorProfile/:id?" exact component={ViewDoctorProfile} />
                <Route path="/PatientTests/:id?" exact component={PatientTests} />
                <Route path="/Admin" exact component={AdminSignIn} />
                <Route path="/Home" exact component={Home} />
                <Route path="/VerifyDoctor" exact component={VerifyDoctor} />
                <Route path="/BanAccount" exact component={BanAccount} />
                <Route path="/ViewReports" exact component={ViewReports} />
                <Route path="/ViewRatings" exact component={ViewRatings} />
                <Route path="/Settings" exact component={Settings} />
                <Route path="/EditDoctorProfile" exact component={EditDoctorProfile} />
                <Route path="/Appointmentss" exact component={Appointmentss} />

                



                <Route path="/ViewDoctor/:id?" exact component={ViewDoctor} />










            </Switch>
        </Router>
    )
}

export default Routes;
