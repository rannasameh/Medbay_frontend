
import React from 'react';
import Chart from './Chart';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./Sidebar";
import { useStyles } from './Styling';
import { Container } from '@material-ui/core';
import Account from './Account';
import Temp from './Temp';

function BanAccount() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container className={classes.container}>
                    <div style={{float:'left'}}><Temp /></div>
                    <div style={{float:'left', paddingLeft:'50px'}}><Temp /></div>
                    <br />
                    <Account />


                </Container>
            </main>
        </div>
    );

}


export default BanAccount;