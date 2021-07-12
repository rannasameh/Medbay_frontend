
import React , {useEffect}from 'react';
import Chart from './Chart';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./Sidebar";
import { useStyles } from './Styling';
import { Container } from '@material-ui/core';
import Account from './Account';
import Temp from './Temp';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

function BanAccount() {
    const classes = useStyles();
 
    const [doctors,setbackenddata]=React.useState([])
    useEffect(async ()=> {
        axios.get('http://localhost:5000/getReportedDoctors')
        .then(res =>{
         setbackenddata(res.data.message)
        })
           
       })
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container className={classes.container}>
                <Grid container spacing={3}>
               {doctors.map(obj => 
                        {
                            return (<Grid item xs={3}>
                              <Temp doctor={obj}  />
                                    </Grid>)
                       })
                   }
           
                   </Grid>
                    <br />
                    <Account />


                </Container>
            </main>
        </div>
    );

}


export default BanAccount;