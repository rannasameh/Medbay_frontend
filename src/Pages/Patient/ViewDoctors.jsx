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
import history from '../../history';
import Rating from '@material-ui/lab/Rating';

let filteredArr=[]
let length
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
    const [Doctors, setDoctors] = React.useState([]);
    let id=localStorage.user
    useEffect(async () => {
        setLoading(false)
        axios.post('http://localhost:5000/getapp',{patient_id : id})
    .then(res => {
        setDoctors(res.data.message)
        length=Doctors.length
        removeDuplicates()
}
)
})
function removeDuplicates(){
     filteredArr = Doctors.reduce((acc, current) => {
        const x = acc.find(item => item.doctor_fname === current.doctor_fname);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
}

   const [stillLoading,setLoading]=React.useState(true)
   const [value, setValue] = React.useState(2);
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {stillLoading?<h1>Loading</h1>:<div className={classes.profileAlignment}>
                        <div>
                        
                            <Paper className={classes.doctorsInformation} style={{ backgroundColor: 'white', paddingLeft:"2%",marginTop:'30px'}}>
                                <Typography style={{fontWeight: 'bold', fontSize: "30px",padding:'10px'}}>View and rate your doctors</Typography>
                            
                               {Doctors.map(dr =>

                         <div>
                         <Grid container spacing={4} style={{padding:"10px"}}>
                         <Grid item xs={3}>
                         <Typography style={{paddingBottom:'10px'}} > {"- "+"Dr. "+dr.doctor_fname+" "+dr.doctor_lname} </Typography>
                         </Grid>
                         <Grid item xs={3}>
                       <Rating value={dr.ratings} 
                       onChange={(event, newValue) => { setValue(newValue);}} size="small" style={{paddingLeft:'20px'}} />
                     </Grid>
                     <Grid item xs={3}>
                    <Button color="primary" >Report </Button>
                     </Grid>
                     </Grid>
                       </div>
                        
                               )
                    
                               }
                     
                               
                                

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



