import React, {useEffect} from 'react';
import { useStyles } from './Styling.jsx'
import Sidebar from './Sidebar.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import doctorDummy from './Pictures/dummyDoctor.jpeg';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import certificate1 from './Dummy/c1.jpeg'
import certificate2 from './Dummy/c2.jpeg'
import certificate3 from './Dummy/c3.jpeg'
import { Icon } from 'semantic-ui-react'
import EditIcon from '@material-ui/icons/Edit';
import Badge from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import {    Fab,} from '@material-ui/core';
import TimeSlots from "./../../TimeSlots"
import history from './../../history';
import Button from '@material-ui/core/Button';
import Upload from './../Patient/Upload';
import Loading from './../Patient/Loading';
let avatar=""
let id=localStorage.user

let rating
let starthour={ 
    value: 0,
    label: '08:30 AM - 09:00 AM'}
let endhour={ 
    value: 0,
    label: '08:30 AM - 09:00 AM'}
const StyledBadge = withStyles(theme => ({
    badge: {
        width: 30,
        height: 30,
        borderRadius: '20%',
    },
}))(Badge);

export default function Profile() {
    const classes = useStyles();
    const [doctorInfo, setDoctors] = React.useState([]);
    

    useEffect(async () => {
        axios.get(`http://localhost:5000/doctors/${id}`)
        .then(res => {
            setLoading(false)
            setDoctors(res.data.message)
             starthour=TimeSlots[res.data.message.clinic_working_hours_from]
             endhour=TimeSlots[res.data.message.clinic_working_hours_to]
            rating=res.data.message.rating
            avatar = res.data.avatar
            console.log('eyad',res.data.avatar)
           
        })
        
    }
    )
    const [stillLoading,setLoading]=React.useState(true)

    return (
        <div className={classes.root} >
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                   {stillLoading?<h1><Loading /></h1>: <div className={classes.profileAlignment}>
                        <div>
                            <div className={classes.profilePictureContainer}>
                               
                                <StyledBadge overlap='circle' anchorOrigin={{horizontal:'right',vertical:'bottom'}}
                                 badgeContent={<Fab variant="rounded" color='primary' component='label'>
                                 <Upload />
                                     {/* <EditIcon/> */}
                                 </Fab>}>
                                    
                                    <Avatar alt="Doctor's picture" className={classes.profilePicture} src={avatar}/>
                                    </StyledBadge>
                        
                            </div>
                            <br />
                            <Paper className={classes.biographyPaper} style={{ backgroundColor: 'white', paddingLeft: "2%" }}>
                            <Button color='primary' onClick={()=>history.push("/EditDoctorProfile")} style={{marginLeft:"160px"}}>Edit profile </Button>

                            <Typography display="inline" style={{ fontSize: "20px",paddingBottom:'10px'}}>Dr. </Typography>
                            <Typography display="inline" style={{fontWeight: 'bold', fontSize: "30px",paddingBottom:'10px'}}> 
                            {doctorInfo.first_name +" "+ doctorInfo.last_name}
                            </Typography>
                              <br />
                              <Typography style={{color: "#757575" }}>{doctorInfo.specialities}</Typography> 
                              <Rating name="read-only" value={rating} readOnly size="large" style={{paddingLeft:'60px',paddingTop:'10px',paddingBottom:'15px'}} />
                                    <br/>
                                   
                                    
                                   
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                    <EmailIcon fontSize='large' style={{paddingLeft:'10px'}}/>
                                    <Typography  style={{paddingLeft:'4px'}} variant="subtitle2">{doctorInfo.email} </Typography>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                  <PhoneIcon fontSize='large' style={{paddingLeft:'10px'}}/>
                                  <Typography display="inline">{doctorInfo.clinic_phone_number}</Typography>
                                    </div>
                                   
                                    <Typography display="inline" style={{fontWeight: 'bold',paddingLeft:'10px',paddingBottom:'10px'}}>Years of Experience: </Typography>
                                    <Typography display="inline" >{doctorInfo.years_of_experience}  years</Typography>
                                            
                            </Paper>
                        </div>
                        <div>
                            <Paper className={classes.doctorsInformation} style={{ backgroundColor: 'white', paddingLeft:"2%",marginTop:'30px'}}>
                                <Typography style={{fontWeight: 'bold', fontSize: "30px",paddingBottom:'10px'}}>Clinic</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}>Address</Typography>
                                <Typography>{doctorInfo.clinic_building+" "+doctorInfo.clinic_street +" "+doctorInfo.clinic_city }</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}>
                                <Icon  name='pin' />
                                Phone Number
                                </Typography>
                                <Typography>{doctorInfo.clinic_phone_number}</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}>Working hours</Typography>
                                <Typography style={{paddingBottom:'10px'}}>From {starthour.label.slice("",8)} to {endhour.label.slice("",8)} </Typography>
                                
                        
                                <hr size='1' width="98%" color='#606060' />
                                <Typography style={{fontWeight: 'bold', fontSize: "30px",paddingBottom:'10px'}}>Certificates</Typography>
                                <div style={{textAlign: 'center'}}>
                                <img src={certificate1} alt="c1" style={{ height: '150px', width: '150px', padding:'10px' }} />
                                <img src={certificate2} alt="c2" style={{ height: '150px', width: '150px', padding:'10px' }} />
                                <img src={certificate3} alt="c3" style={{ height: '150px', width: '150px', padding:'10px'}} />
                                </div>
                                <hr size='1' width="98%" color='#606060'/>
                                <Typography style={{fontWeight: 'bold', fontSize: "30px", paddingBottom:'10px',paddingTop:'10px'}}>Reviews</Typography>
                
                                <Typography style={{paddingBottom:'10px'}}>Coming soon </Typography>
                               
                                

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

