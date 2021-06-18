
import React from 'react';
import Chart from './Chart';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./Sidebar";
import {useStyles} from './Styling';
import { Container } from '@material-ui/core';

function ViewReports() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <CssBaseline />
        <Sidebar />
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className = {classes.container}>
            

reportsss

            </Container>
            </main>
        </div>
        );

}


export default ViewReports;