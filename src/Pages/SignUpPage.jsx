import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AccountInformation from "../AccountInformation";
import GeneralInfromation from"../GeneralInfromation";
import Specialities from"../Specialities";
import MedicalHistory from"../MedicalHistory";
import HealingIcon from '@material-ui/icons/Healing';
import Header from"../Header";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = [
  "Account information",
  "General information",
  "Further information"
];
const sections = [
  { title: 'Home', url: '#' },
  { title: 'About us', url: '#' },
  { title: 'Sevices', url: '#' },
  { title: 'Careers', url: '#' },
  { title: 'Contact us', url: '#' },

  
];

export default function Checkout() {
  function getStepContent(step) {
    console.log(SignUpform)
    switch (step) {
      case 0:
        
        return <AccountInformation inputValues={SignUpform} fn={SetSignUpForm}/>;
      case 1:
        
        return <GeneralInfromation inputValues={SignUpform} fn={SetSignUpForm}/>;
      case 2:
        
        return SignUpform.AccountType==="Doctor"?<Specialities inputValues={SignUpform} fn={SetSignUpForm}/>:<MedicalHistory inputValues={SignUpform} fn={SetSignUpForm}/>
      


      default:
        throw new Error("Unknown step");
    }
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [SignUpform,SetSignUpForm]=React.useState({
    username:"",
    AccountType:"",
    email:"",
    password:"",
    password_confirmation:"",
    first_name:"",
    last_name:"",
    date_of_birth:"",
    gender:"",
    street:"",
    building:"",
    city:"",
    state:"",
    zip_code:"",
    country:"",
    phone_number:"",
    marital_status:"",
    emergency_first_name:"",
    emergency_last_name:"",
    emergency_phone_number:"",
    height:"",
    weight:"",
    blood_type:"",
    allergies:[],
    diseases:[],
    otherIllnesses:[],
    operations:[],
    medications:[],
    special_habits:[],
    family_allergies:[],
    family_diseaeses:[],
    family_other_illnesses:[],
    specialities:[],
    latest_acdemic_achievment:"",
    years_of_experience:"",
    clinic_street:"",
    clinic_building:"",
    clinic_city:"",
    clinic_state:"",
    clinic_zip_code:"",
    to:"",
    from:"",
    clinic_country:"",
    clinic_phone_number:"",
    clinic_working_days:[],
    clinic_working_hours_from:"",
    clinic_working_hours_to:""
  })

  const CreateU = () => {
    var axios = require('axios');
    var data = {
      "username": SignUpform.username,
      "secret": "123",
      "email": SignUpform.email,
      "first_name": SignUpform.first_name,
      "last_name": SignUpform.last_name,
      "custom_json": {"fav_game": "Candy Crush", "high_score": 2002}
    };
    
    var config = {
      method: 'post',
      url: 'https://api.chatengine.io/users/',
      headers: {
        'PRIVATE-KEY': '{{c50004da-2f58-46a2-84b8-6a852457183a}}'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    }
    
    const firstMethod = () => {
      console.log("button clicked")
      CreateU();
    }


  const handleNext = () => {
    if(activeStep === 2 )
    {
      firstMethod();
    }
    setActiveStep(activeStep + 1)
   if( activeStep === 2 && SignUpform.AccountType==='Doctor') 
      {axios.post('http://localhost:5000/doctors',SignUpform)
      .then(res =>{
        setbackenddata(res.data.message)
        console.log(res.data.message)
      })}
     else if(activeStep === 2&&SignUpform.AccountType==='Patient')
     {

      axios.post('http://localhost:5000/patients',SignUpform)
      .then(res =>{
        setbackenddata(res.data.message)
        console.log(res.data.message)
      })
     }
     
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
 const [backenddata,setbackenddata]=React.useState([])


  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="MEDBAY" sections={sections} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography color='secondary' component="h1" variant="h4" align="center">
            Sign up
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography color='secondary' variant="h5" gutterBottom>
                  Welcome onboard!
                </Typography>
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button color='secondary' onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Create account" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      
      </main>
    </React.Fragment>
  );
}
