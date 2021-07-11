
import React , {useEffect}from 'react';
import Chart from './Chart';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./Sidebar";
import { useStyles } from './Styling';
import { Container } from '@material-ui/core';
import Patients from "./Patients";
import { BarChart } from '@material-ui/icons';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
import Bar from './Barchart';
import Waw from './Waw';
import Waw2 from './Waw2';
import Waw3 from './Waw3';
import Waw4 from './Waw4';
import axios from 'axios'
function Home() {
    const [users,setbackenddata]=React.useState([])
    useEffect(async ()=> {
        axios.get('http://localhost:5000/getUsers')
        .then(res =>{
         setbackenddata(res.data)
        
        })
           
       })
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container className={classes.container}>
                    {/* <Box className={classes.minibox}>
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
                <div>1000</div></Box> */}

                    <Box
                        sx={{
                            backgroundColor: 'background.default',
                            minHeight: '100%',
                            py: 3
                        }}
                    >
                        <Container maxWidth={false}>
                            <Grid
                                container
                                spacing={3}
                            >
                                <Grid
                                    item
                                    lg={3}
                                    sm={6}
                                    xl={3}
                                    xs={12}
                                >
                                    <Waw newpatients={users.newPatients}/>
                                </Grid>
                                <Grid
                                    item
                                    lg={3}
                                    sm={6}
                                    xl={3}
                                    xs={12}
                                >
                                    <Waw2 totalPatients={users.totalPatients}/>
                                </Grid>
                                <Grid
                                    item
                                    lg={3}
                                    sm={6}
                                    xl={3}
                                    xs={12}
                                >
                                    <Waw3 totaldoctors={users.totaldrs}/>
                                </Grid>
                                <Grid
                                    item
                                    lg={3}
                                    sm={6}
                                    xl={3}
                                    xs={12}
                                >
                                    <Waw4 pendingdoctors={users.pending} sx={{ height: '100%' }} />
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

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
