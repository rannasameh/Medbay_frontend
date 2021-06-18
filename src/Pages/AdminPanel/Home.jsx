
import React from 'react';
import Chart from './Chart';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./Sidebar";
import {useStyles} from './Styling';
import { Container } from '@material-ui/core';
import Patients from "./Patients";
import { BarChart } from '@material-ui/icons';
import Bar from './Barchart';

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Sidebar />
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className = {classes.container}>
            <Box className={classes.minibox}>
                <div>New Patients</div>
                <div>105</div></Box>
            <Box className={classes.minibox}>
                <div>Total Patients</div>
                <div>1000</div></Box>
            <Box className={classes.minibox}>
                <div>Doctors</div>
                <div>1000</div></Box>
            <Box className={classes.minibox}>
                <div>Appointments</div>
                <div>1000</div></Box>
            
            <Patients />
           <Bar />
           <container>
           <Chart />
           </container>
            
            </Container>
            </main>
        </div>
        );

}


export default Home;