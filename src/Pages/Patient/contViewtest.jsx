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
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AttachFileIcon from '@material-ui/icons/AttachFile';
let filteredArr=[]
const downloadFile = value => {
    axios.request({
        method: "get",
        url: value,
        responseType: 'arraybuffer'
    }).then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const contentDisposition = response.headers['content-disposition'];
        let fileName = 'unknown';
        if (contentDisposition) {
            const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
            if (fileNameMatch.length === 2)
                fileName = fileNameMatch[1];
        }
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();

    })
}
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
    const [tests, setTests] = React.useState([]);
    const [medications, setMedications] = React.useState([]);
    let id=localStorage.user

useEffect(async () => {
    setLoading(false)
axios.post(`http://localhost:5000/getmedications`,{patient_id : id})
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
function setfile({ target: { files } })
{console.log(id)
    if (files[0].name !== ' No file chosen')
    {
        let formData = new FormData();
         let url = ` http://localhost:5000/updateTests/${localStorage.user}`;
        formData.append('avatar' , files[0])
        axios.request({
            method: "post", 
            url: url, 
            data: formData,
            // headers: { Authorization: "Bearer " + localStorage.token },
        }).then (res => {
            console.log("done")
             history.go(0);
            
        })
   
    }
    else 
    {
        console.log('not chosen')
    }
}
   const [stillLoading,setLoading]=React.useState(true)

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
                        <Grid container spacing={3}>
                        <Grid item xs={6}>
                        <Typography > {"- "+test.name+" "+"Prescribed by Dr. "+test.doctor_fname+" "+test.doctor_lname} </Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <input className={classes.input} id="icon-button-file" type="file" onChange={setfile}/>
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="#DBE9F3" aria-label="upload picture" component="span">
                                        <AttachFileIcon style={{backgroundColor:'primary'}} />
                                        Attach 
                                        </IconButton>
                                    </label>
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



