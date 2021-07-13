import React, {useEffect} from 'react';
import { useStyles } from './Styling.jsx'
import Sidebar from './Sidebar.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import Badge from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import {Fab, Grid,} from '@material-ui/core';
import history from '../../history';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import DoneIcon from '@material-ui/icons/Done';
import GetAppIcon from '@material-ui/icons/GetApp';
let filteredArr=[]

let testtid
const StyledBadge = withStyles(theme => ({
    badge: {
        width: 30,
        height: 30,
        borderRadius: '20%',
    },
}))(Badge);
let id=localStorage.user

export default function Profile(props) {
    const classes = useStyles();
    const [tests, setTests] = React.useState([]);
    const [medications, setMedications] = React.useState([]);
    let id=localStorage.user
    useEffect(async () => {
        setLoading(false)
    axios.post(`http://localhost:5000/getTests`,{id : patient_id})
        .then(res => {
            setTests(res.data.message)
            
    }
    )

},[])
useEffect(async () => {
    setLoading(false)
axios.post(`http://localhost:5000/getmedications`,{patient_id : patient_id})
.then(res => {
    setMedications(res.data.message)
    removeDuplicates()
}
)


})
function removeDuplicates(){
     filteredArr = medications.reduce((acc, current) => {
        const x = acc.find(item => item.name === current.name);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, []);
   
}
const [stillLoading,setLoading]=React.useState(true)
const [testt,setid]=React.useState(0)
function handlechange(event){
    const {name,value}=event.target
    SetDone(false)
    setid(value)

}
const [isDone,SetDone]=React.useState(false)

function setfile({ target: { files } })
{
    if (files[0].name !== ' No file chosen')
    {
        let formData = new FormData();
         let url = ` http://localhost:5000/updateTests`;
        formData.append('testFile' , files[0])
        formData.append('testID' ,testt)
        axios.request({
            method: "post", 
            url: url, 
            data: formData,
            // headers: { Authorization: "Bearer " + localStorage.token },
        }).then (res => {
            SetDone(true)
            
        })
   
    }
    else 
    {
        console.log('not chosen')
    }
}

const patient_id=props.match.params.id
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
                                <Typography style={{fontWeight: 'bold', fontSize: "30px",paddingBottom:'10px'}}>Current medications and tests</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Medications</Typography>
                               {filteredArr.map(med =>
                        <Typography > {"- "+med.name+" "+"Prescribed by Dr. "+med.doctor_fname+" "+med.doctor_lname} </Typography>)}
                
            

                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Required tests</Typography>
                        {tests.map(test =>
                        <div>
                        <Grid container spacing={3} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                        <Grid item xs={6}>
                        <Typography > {"- "+test.name+" "+"Prescribed by Dr. "+test.doctor_fname+" "+test.doctor_lname} </Typography>
                        </Grid>
                        <Grid item xs={6}  style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                      { test.testFile === ' ' ? <span>Not attached yet</span> : <a href={test.testFile}> view report</a>
                       } 
                       </Grid>
                                    </Grid>
                                    </div>
                       ) }
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



