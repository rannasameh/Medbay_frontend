import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Health from'./Images/HealthCareNeeds.jpg';
import Tele from'./Images/Teleconsultation.jpg';
import Reminder from'./Images/reminder.jpg';
import Chatbot from'./Images/Chatbot.jpg';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    //gridGap:'20px 0px'
  },
  imageleft: {
    
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain',
   
   

  },
  imageright: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'contain',
    backgroundPosition:'right'
    
   

  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      
      <Grid item xs={false} sm={4} md={7} className={classes.imageleft} style={{backgroundImage:`url(${Health})`}} />
      <Grid item xs={12} sm={8} md={5} elevation={6} square noShadow={true}>
        <div className={classes.paper} >
          <Typography color='secondary' style={{fontFamily:"Impact,fantasy",fontWeight:"bold" ,fontSize:'34px'}}component="h1" variant="h5">
         All your healthcare neeeds
          </Typography>
          <Typography component="h1" variant="h5" style={{paddingTop:'50px',paddingLeft:'30px',fontFamily:'"Times New Roman", Times, serif' }}>
          Compare, choose, and book a doctor around your area based on patients' reviews.
          </Typography> 
          
        </div>
      </Grid>
     
      <Grid item xs={12} sm={8} md={5}  elevation={6} square>
        <div className={classes.paper}>
          <Typography color='secondary'  style={{fontFamily:"Impact,fantasy",fontWeight:"bold" ,fontSize:'34px'}}component="h1" variant="h5">
           Chat with your doctor
          </Typography>
          <Typography component="h1" variant="h5" style={{paddingTop:'50px',paddingLeft:'30px',fontFamily:'"Times New Roman", Times, serif' }}>
           Search and book a clinic visit or teleconsultation from a wide variety of doctors around your
          </Typography> 
         
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.imageright} style={{ backgroundImage:`url(${Tele})`}} />

      <Grid item xs={false} sm={4} md={7} className={classes.imageleft} style={{backgroundImage:`url(${Reminder})`}} />
      <Grid item xs={12} sm={8} md={5} elevation={6} square noShadow={true}>
        <div className={classes.paper} >
          <Typography color='secondary' style={{fontFamily:"Impact,fantasy",fontWeight:"bold" ,fontSize:'34px'}}component="h1" variant="h5">
         Book your appointment 
          </Typography>
          <Typography component="h1" variant="h5" style={{paddingTop:'50px',paddingLeft:'30px',fontFamily:'"Times New Roman", Times, serif' }}>
          Compare, choose, and book a doctor around your area based on patients' reviews.
          </Typography> 
          
        </div>
      </Grid>
   
      <Grid item xs={12} sm={8} md={5}  elevation={6} square>
        <div className={classes.paper}>
          <Typography color='secondary'  style={{fontFamily:"Impact,fantasy",fontWeight:"bold" ,fontSize:'34px'}}component="h1" variant="h5">
           Chat wit Medi-Bot
          </Typography>
          <Typography component="h1" variant="h5" style={{paddingTop:'50px',paddingLeft:'30px',fontFamily:'"Times New Roman", Times, serif' }}>
           A medical chatbot that eases finding the right doctor for you based on your symptoms
          </Typography> 
          
        </div>
      </Grid>
      <Grid item xs={false} sm={4} md={7} className={classes.imageright} style={{ backgroundImage:`url(${Chatbot})`}} />
   
   
    </Grid>
    
  );
}