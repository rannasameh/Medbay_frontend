import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './Styling';
import Sidebar from "./Sidebar.jsx";
import Copyright from "./Copyright";
import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonBase from '@material-ui/core/ButtonBase';
import pills from './Pictures/pills.png';
import chat from './Pictures/chat.png';
import clinic from './Pictures/hospital.png';
import history from '../../history';

export default function Dashboard(props) {
  const classes = useStyles();
  const fixedHeightDashboard = clsx(classes.paper, classes.fixedHeightDashboardPaper)
  const patient_id=props.match.params.id
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightDashboard} square={false} elevation={10} style={{backgroundColor: '#ccdbee'}}>
              <ButtonBase disableRipple style={{marginTop:'2%'}} onClick={() => history.push("/ViewPatients")}>
              <Typography align='center' variant='subtitle2'>
              <img src={pills} alt="Pills" style={{height:'27px', width:'27px'}}/>
              <br />
              Change your patient's medications and <br /> they will be notified with the changes!
              </Typography>
              </ButtonBase>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9} >
              <Paper className={fixedHeightDashboard} square={false} elevation={10} style={{backgroundColor: '#ccdbee'}} >
              <ButtonBase disableRipple style={{marginTop:'2%'}} onClick={() => history.push("/DoctorMessaging")}>
              <Typography align='center' variant='subtitle2' >
              <img src={chat} alt="Messages" style={{height:'27px', width:'27px'}}/>
              <br />
              Chat online with your patients!
              </Typography>
              </ButtonBase>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9} >
              <Paper className={fixedHeightDashboard} elevation={10} style={{backgroundColor: '#ccdbee'}}>
              <ButtonBase disableRipple style={{marginTop:'2%'}}  onClick={()=>history.push("/Appointmentss")}>
              <Typography variant='subtitle2' align='center' >
              <img src={clinic} alt="Clinic" style={{height:'27px', width:'27px'}}/>
              <br />
              Manage your clinic appointments online and get notified!
              </Typography>
              </ButtonBase>
              </Paper>
            </Grid>
          </Grid>         
        </Container>
        <Box pt={4}>
          <Copyright />
        </Box>   
      </main>

    </div>
    
  );
}