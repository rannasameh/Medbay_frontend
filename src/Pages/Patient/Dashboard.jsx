import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './Styling';
import Sidebar from "./Sidebar";
import Copyright from "./Copyright";
import CssBaseline from '@material-ui/core/CssBaseline';
import ButtonBase from '@material-ui/core/ButtonBase';
import bot from './Pictures/health-report.png';
import chat from './Pictures/chat.png';
import map from './Pictures/map.png';
import loupe from './Pictures/loupe.png';
import history from '../../history';

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightDashboard = clsx(classes.paper, classes.fixedHeightDashboardPaper)

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
              <ButtonBase disableRipple style={{marginTop:'2%'}} onClick={() => history.push('/DisclaimerPage')}>
              <Typography align='center' variant='subtitle2'>
              <img src={bot} alt="Bot Image" style={{height:'27px', width:'27px'}}/>
              <br />
              Use our symptom checker now and get a medical diagnosis now!
              </Typography>
              </ButtonBase>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9} >
              <Paper className={fixedHeightDashboard} square={false} elevation={10} style={{backgroundColor: '#ccdbee'}} >
              <ButtonBase disableRipple style={{marginTop:'2%'}}>
              <Typography align='center' variant='subtitle2' >
              <img src={chat} alt="Messages" style={{height:'27px', width:'27px'}}/>
              <br />
              Join a Chatroom and share your <br /> experience with others
              </Typography>
              </ButtonBase>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9} >
              <Paper className={fixedHeightDashboard} elevation={10} style={{backgroundColor: '#ccdbee'}}>
              <ButtonBase disableRipple style={{marginTop:'2%'}}>
              <Typography variant='subtitle2' align='center' >
              <img src={map} alt="Map icon" style={{height:'27px', width:'27px'}}/>
              <br />
              Find the nearest clinic to your location and <br /> book your appointment now!
              </Typography>
              </ButtonBase>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8} lg={9} >
              <Paper className={fixedHeightDashboard} square={false} elevation={10} style={{backgroundColor: '#ccdbee'}}>
              <ButtonBase disableRipple style={{marginTop:'2%'}} onClick={()=>history.push("/SearchPage")}>
              <Typography variant='subtitle2' align='center' >
              <img src={loupe} alt="Loupe icon" style={{height:'27px', width:'27px'}}/>
              <br />
              Discover our wide range of doctors with <br />
              different specialities and check their rating
              before you book!
              </Typography>
              </ButtonBase>
              </Paper>
            </Grid>
          </Grid>
            <Copyright />
        </Container>
      </main>
    </div>
  );
}