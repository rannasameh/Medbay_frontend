import React, {useEffect} from 'react';
import { useStyles } from './Styling.jsx'
import Sidebar from './Sidebar.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import doctorDummy from './Pictures/userprofile.jpeg';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Badge from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import {Fab, Grid,} from '@material-ui/core';
import history from './../../history';

let diseases=[]
let allergies=[]
let medications=[]
let operations=[]
let special_habits=[]
let family_diseases=[]
let family_allergies=[]
let family_other_illnesses=[]

const StyledBadge = withStyles(theme => ({
    badge: {
        width: 30,
        height: 30,
        borderRadius: '20%',
    },
}))(Badge);
let id=localStorage.user
export default function Profile() {
    const classes = useStyles();
    const [patientInfo, setPatientInfo] = React.useState([]);

    useEffect(async () => {
    axios.get(`http://localhost:5000/patients/${id}`)
        .then(res => {
            setLoading(false)
            setPatientInfo(res.data.message)
            diseases=res.data.message.diseases
            allergies=res.data.message.allegries
            medications=res.data.message.medications
            operations=res.data.message.operations
            family_diseases=res.data.message.family_diseaeses
            family_allergies=res.data.message.family_allergies
            family_other_illnesses=res.data.message.family_other_illnesses
            special_habits=res.data.message.special_habits
            
        })
  
    }
    )
    
   
   const [stillLoading,setLoading]=React.useState(true)

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {stillLoading?<h1>Loading</h1>:<div className={classes.profileAlignment}>
                        <div>
                            <div className={classes.profilePictureContainer}>
                               
                                <StyledBadge overlap='circle' anchorOrigin={{horizontal:'right',vertical:'bottom'}}
                                 badgeContent={<Fab variant="rounded" color='primary' component='label'>
                                     <EditIcon/>
                                 </Fab>}>
                                    
                                    <Avatar alt="Doctor's picture" className={classes.profilePicture} src={doctorDummy}/>
                                    </StyledBadge>
                            </div>
                            <br />
                            <Paper className={classes.biographyPaper} style={{ backgroundColor: 'white' }}>
                            <Button color='primary' onClick={()=>history.push("/EditProfile")} style={{marginLeft:"160px"}}>Edit profile </Button>
                            <Typography  style={{fontWeight: 'bold', fontSize: "30px",paddingBottom:'10px',textAlign: 'center'}}> {patientInfo.patient_first_name +" "+ patientInfo.patient_last_name}</Typography>
                            <Typography style={{fontWeight: 'bold',fontSize: "22px",paddingBottom:'10px'}}>About</Typography>
                           
                              <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Gender: </Typography>
                              <Typography display="inline" >{patientInfo.gender}</Typography>
                                        <br/>
                                        <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Date of birth: </Typography>
                              <Typography display="inline" > {patientInfo.date_of_birth} </Typography>
                                        <br/>
                                        <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Marital Status: </Typography>
                              <Typography display="inline" > {patientInfo.marital_status} </Typography>
                                        <br/>
                                        <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Address: </Typography>
                              <Typography display="inline" > {patientInfo.building+" "+patientInfo.street +" "+patientInfo.city }</Typography>
                                        <br/>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                    <EmailIcon fontSize='meduim' />
                                    <Typography  style={{paddingLeft:'4px'}} variant="subtitle2">{patientInfo.email} </Typography>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                  <PhoneIcon fontSize='meduim'/>
                                  <Typography display="inline">{patientInfo.phone_number}</Typography>
                                    </div>
                                    <Typography style={{paddingBottom:'10px'}}>-----------------------------------------------</Typography>
                                    <Typography style={{fontWeight: 'bold',fontSize: "22px",paddingBottom:'10px'}}>Emergency Contact </Typography>
                                    <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Name: </Typography>
                              <Typography display="inline" > {patientInfo.emergency_first_name +" "+ patientInfo.emergency_last_name}</Typography>
                              <br/>  
                              <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                  <PhoneIcon fontSize='meduim' />
                                  <Typography display="inline">{patientInfo.emergency_phone_number}</Typography>
                                    </div> 
                            </Paper>
                        </div>
                        <div>
                            <Paper className={classes.doctorsInformation} style={{ backgroundColor: 'white', paddingLeft:"2%",marginTop:'30px'}}>
                            <Button display="inline"   color="secondary"  onClick={()=>history.push("/ViewTests")} style={{marginLeft:"260px",fontSize:" 15px"}}>
                               View current medications and tests
                                </Button>
                                <Typography style={{fontWeight: 'bold', fontSize: "30px",paddingBottom:'10px'}}>Medical History</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>General Information</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}>Blood Type</Typography>
                                <Typography>{patientInfo.blood_type}</Typography>
                                <Grid container spacing={3}>
                                <Grid item xs={6}>
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}> Weight</Typography>
                                <Typography>{patientInfo.weight} kgs </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}>Height</Typography>
                                <Typography style={{paddingBottom:'10px'}}>{patientInfo.height} cm</Typography>
                                </Grid>
                                </Grid>

                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Chronic Diseases and conditions</Typography>
                       {diseases.map(disease =>
                            <Typography > {"- "+disease.name} </Typography>)}
                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Allergies</Typography>
                        {allergies.map(allergy =>
                        <Typography > {"- "+allergy.name} </Typography>)}
                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Latest Operations</Typography>
                        {operations.map(operation =>
                        <Grid container spacing={3}>
                                <Grid item xs={6}>
                               <Typography >{"- "+ operation.operation_name} </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography style={{paddingBottom:'10px'}}>{ operation.operation_date}</Typography>
                                </Grid>
                                </Grid>
                                )}
                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Special Habits</Typography>
                        {special_habits.map(habit =>
                        <Typography > {"- "+habit.special_habit} </Typography>)}
                                
                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>

                                <Typography style={{fontWeight: 'bold', fontSize: "30px", paddingBottom:'10px',paddingTop:'10px'}}>Family Medical History</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Chronic Diseases and conditions</Typography>
                                <Typography >  </Typography>
                        <Typography > {"- "+patientInfo.family_diseaeses} </Typography>
                                <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Allergies</Typography>
                                <Typography > {"- "+patientInfo.family_allergies} </Typography>

                               
                                

                            </Paper>    
                        </div>
                    </div>}
                </Container>
                <Box pt={4}>
                <Copyright />
                </Box>

            </main>
        </div>
    );
}


