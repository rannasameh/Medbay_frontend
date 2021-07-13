import React, {useEffect} from 'react';
import { useStyles } from '../Patient/Styling'
import Sidebar from './Sidebar.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Copyright from './Copyright';
import doctorDummy from '../Patient/Pictures/userprofile.jpeg';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import Badge from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import {Fab, Grid, TextField,} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/Remove';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import "react-calendar/dist/Calendar.css";
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import 'reactjs-popup/dist/index.css';
import Tooltip from '@material-ui/core/Tooltip'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import history from '../../history';
let id=localStorage.user

let diseases=[]
let allergies=[]
let medications=[]
let operations=[]
let special_habits
let family_diseases=[]
let family_allergies=[]
let family_other_illnesses=[]
const StyledBadge = withStyles(theme => ({
    badge: {
        width: 30,
        height: 30,
        borderRadius: '20%',
    },
}))(Badge);
let temp=0
export default function Profile(props) {
  useEffect(async () => {
    axios.get(`http://localhost:5000/patients/${patient_id}`,)
        .then(res => {
          setLoading(false)
            setPatientInfo(res.data.message)
            diseases=res.data.message.diseases
            allergies=res.data.message.allegries
            medications=res.data.message.medications
            operations=res.data.message.operations
            family_diseases=res.data.message.family_diseaeses
            family_allergies=res.data.message.family_allergies
            family_other_illnesses=res.data.message.family_other_illnesses
        })
  
    },[]
    )
    const classes = useStyles();
    const [patientInfo, setPatientInfo] = React.useState([]);

   const [diseaseinputList, setdiseaseInputList] = React.useState([{disease:""}]);
  const [allergyinputList, setallergyInputList] = React.useState([{allergy:""}]);
  const [operationinputList, setoperationInputList] = React.useState([{operation_name:"",
  operation_date:""}]);
   const [opeartiontemp,setopeartiontemp]=React.useState(0)
   const [allergytemp,setallergytemp]=React.useState(0)
   const [diseasetemp,setdiseaesetemp]=React.useState(0)
   const [isOpen, setIsOpen] = React.useState(false);
   const [open, setOpen] = React.useState(false)
   const [switchState, setSwitchState] = React.useState({
     addMultiple: false,
   })
   const patient_id=props.match.params.id
   const handleSwitchChange = name => event => {
     setSwitchState({ ...switchState, [name]: event.target.checked })
   }
   
   const resetSwitch = () => {
     setSwitchState({ addMultiple: false })
   }
   
   const handleClickOpen = () => {
     setOpen(true)
   }
   
   const handleClose = () => {
     setOpen(false)
     resetSwitch()
   }
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...diseaseinputList];
      list[index][name] = value;
      setdiseaseInputList(list);
    };
   
    const handleRemoveClick = index => {
      const list = [...diseaseinputList];
      list.splice(index, 1);
      setdiseaseInputList(list);
    };
   
    const handleAddClick = () => {
        setdiseaseInputList([...diseaseinputList, {disease:""} ]);
    };
  
   const handleAllergyInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...allergyinputList];
    list[index][name] = value;
    setallergyInputList(list);
  };
 
  const handleallergyRemoveClick = index => {
    const list = [...allergyinputList];
    list.splice(index, 1);
    setallergyInputList(list);
  };
 
  const handleAllergyAddClick = () => {
    setallergyInputList([...allergyinputList, { 
    allergy:"",
     } ]);
  };
 
   const handleOperationInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...operationinputList];
    list[index][name] = value;
    setoperationInputList(list);
  };
 
  const handleOpeationRemoveClick = index => {
    const list = [...operationinputList];
    list.splice(index, 1);
    setoperationInputList(list);
  };
 
  const handleOperationAddClick = () => {
    setoperationInputList([...operationinputList, { 
    operation_name:"",
   operation_date:"", } ]);
  };
 
   function handleoperationclick(){
    setopeartiontemp(1)
   }
   function handleallergyclick(){
    setallergytemp(1)
   }
   function handlediseaseclick(){
    setdiseaesetemp(1)
   }
   const [inputList, setInputList] = React.useState([{name: "",start_date: "",duration:"",times:"",dose:"" }]);
    const handleInput = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
   
    const handleRemove = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
   
    const handleAdd = () => {
      setInputList([...inputList, {name: "",start_date: "",duration:"",times:"",dose:"" }]);
    };
    const [inputListreports, setInputListreports] = React.useState([{ reportsName:"" }]);
    const handleInputreports = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputListreports];
      list[index][name] = value;
      setInputListreports(list);
    };
   
    const handleRemovereports = index => {
      const list = [...inputListreports];
      list.splice(index, 1);
      setInputListreports(list);
    };
   
    const handleAddreports = () => {
      setInputListreports([...inputListreports, { reportsName: ""}]);
    };
   function handle(){
    axios.post('http://localhost:5000/updateMedication',{patient_id :patient_id ,disease :diseaseinputList,allergy :allergyinputList,operation: operationinputList})
    .then(res =>{

   })
}
   function HandleAddmedication(){
       console.log('in')
       temp=1
   }
   function handleopen(){
    setOpen(true)
   }
function handleSubmit(){
    axios.post('http://localhost:5000/medications',{patient_id :patient_id,medications :inputList,reports :inputListreports,doctor_id :id})
    .then(res =>{
      setOpen(false)
      
   })
}
const [stillLoading,setLoading]=React.useState(true)
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                   { stillLoading?<h1>Loading</h1>:<div className={classes.profileAlignment}>
                        <div>
                            <div className={classes.profilePictureContainer}>
                               
                                
                                
                                    
                                    <Avatar alt="Doctor's picture" className={classes.profilePicture} src={doctorDummy}/>
                                  
                            </div>
                            <br />
                            <Paper className={classes.biographyPaper} style={{ backgroundColor: 'white' }}>
                            <Typography  style={{fontWeight: 'bold', fontSize: "30px",paddingBottom:'10px',textAlign: 'center'}}> {patientInfo.patient_first_name +" "+ patientInfo.patient_last_name}</Typography>
                            <Typography style={{fontWeight: 'bold',fontSize: "22px",paddingBottom:'10px'}}>About</Typography>
                           
                              <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Gender: </Typography>
                              <Typography display="inline" >{patientInfo.gender}</Typography>
                                        <br/>
                                        <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Date of birth: </Typography>
                              <Typography display="inline" > {patientInfo.date_of_birth} </Typography>
                                        <br/>
                                        <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Marital Status: </Typography>
                              <Typography display="inline" > {patientInfo.marital_status} </Typography>
                                        <br/>
                                        <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Address: </Typography>
                              <Typography display="inline" > {patientInfo.building+" "+patientInfo.street +" "+patientInfo.city }</Typography>
                                        <br/>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                    <EmailIcon fontSize='meduim' />
                                    <Typography  style={{paddingLeft:'4px'}} variant="subtitle2">{patientInfo.email} </Typography>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                  <PhoneIcon fontSize='meduim'/>
                                  <Typography display="inline">{patientInfo.phone_number}</Typography>
                                    </div>
                                    <Typography style={{paddingBottom:'10px'}}>-----------------------------------------------</Typography>
                                    <Typography style={{fontWeight: 'bold',fontSize: "22px",paddingBottom:'10px'}}>Emergency Contact </Typography>
                                    <Typography display="inline" style={{fontWeight: 'bold',paddingBottom:'10px'}}>Name: </Typography>
                              <Typography display="inline" > {patientInfo.emergency_first_name +" "+ patientInfo.emergency_last_name}</Typography>
                              <br/>  
                              <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                  <PhoneIcon fontSize='meduim' />
                                  <Typography display="inline">{patientInfo.emergency_phone_number}</Typography>
                                    </div> 
                            </Paper>
                        </div>
                        <div>
                            <Paper className={classes.doctorsInformation} style={{ backgroundColor: 'white', paddingLeft:"2%",marginTop:'30px'}}>
                            <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                <Typography style={{fontWeight: 'bold', fontSize: "30px",paddingBottom:'10px'}}>Medical History</Typography>
                                <Tooltip  >
                                <Button display="inline"   color="secondary"  onClick={handleopen} style={{marginLeft:"60px",fontSize:" 15px"}}>
                               <AddIcon/> ADD MEDICATION
                                </Button>
                                </Tooltip>
                                <Dialog
                                fullWidth
                                maxWidth="sm"
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="form-dialog-title"
                                    >
                            <Typography style={{textAlign:'center',fontWeight:'bold',fontSize:'30px',color:'#01579b'}}>
                            </Typography>
                            <DialogContent>
                            <Typography  style={{fontWeight: 'bold',fontSize: "30px",padding:'10px'}}>
                            Medication</Typography>
                                   
                                    {  inputList.map((x, i) => {
                                        return (
                                        <div className="box">
                                        <Grid container spacing={0} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <Grid item xs={6}>
                                        <TextField display="inline"
                                            style={{border:"none",borderBottom: "1px  black",padding:"10px"}}
                                            name="name"
                                           placeholder="Medication name"
                                            value={x.Name}
                                            onChange={e => handleInput(e, i)}
                                            />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <div className="btn-box">
                                    {inputList.length - 1 === i && <Button onClick={handleAdd}><AddCircleOutlineIcon/></Button>}
                                    {inputList.length !== 1 && <Button
                                        className="mr10"
                                        onClick={() => handleRemove(i)}><RemoveIcon/></Button>}
                                    </div>
                                       </Grid>
                                          </Grid>
                                          <TextField  
                                            style={{border:"none",borderBottom: "1px  black",padding:"10px"}}
                                            name="start_date"
                                            type='date'
                                            placeholder="Start Date"
                                            value={x.start_date}
                                            onChange={e => handleInput(e, i)}
                                            />
                                            <br/>
                                            <TextField
                                            style={{border:"none",borderBottom: "1px  black",padding:"10px"}}
                                            
                                            name="duration"
                                            placeholder="Duration"
                                            value={x.duration}
                                            onChange={e => handleInput(e, i)}
                                            />
                                             <br/>
                                              <TextField
                                            style={{border:"none",borderBottom: "1px  black",padding:"10px"}}
                                            name="times"
                                            placeholder="Repeations/day"
                                            value={x.times}
                                            onChange={e => handleInput(e, i)}
                                            />
                                             <br/>
                                              <TextField
                                            style={{border:"none",borderBottom: "1px  black",padding:"10px"}}
                                            name="dose"
                                            placeholder="Dosage"
                                            value={x.dose}
                                            onChange={e => handleInput(e, i)}
                                            />
                                          <Typography style={{padding:'10px'}}>-------------------------------------------------------------------</Typography>

                                        </div>
                                        );
                                    })}
                                      <Typography  style={{fontWeight: 'bold',fontSize: "22px",padding:"10px"}}>Required tests</Typography>
                                      {  inputListreports.map((x, i) => {
                                        return (
                                        <div className="box">
                                        <Grid container spacing={0}>
                                        <Grid item xs={6}>
                                        <TextField display="inline"
                                            style={{border:"none",borderBottom: "1px  black",padding:"10px"}}
                                            name="reportsName"
                                           placeholder="Test name"
                                            value={x.reportsName}
                                            onChange={e => handleInputreports(e, i)}
                                            />
                                    </Grid>
                                    <Grid item xs={6}>
                                    <div className="btn-box">
                                    {inputListreports.length - 1 === i && <Button onClick={handleAddreports}><AddCircleOutlineIcon/></Button>}
                                    {inputListreports.length !== 1 && <Button
                                       
                                        onClick={() => handleRemovereports(i)}><RemoveIcon/></Button>}
                                    </div>
                                       </Grid>
                                          </Grid>
                                      
                                           
                                 <Typography style={{padding:'10px'}}>-------------------------------------------------------------------</Typography>

                                        </div>
                                        );
                                    })}
                                    </DialogContent>
                                    <DialogActions>
                                    <IconButton
                                        fillwidth
                                        style={{ backgroundColor:"#01579b",
                                        borderRadius: "4px",color:'white' ,
                    
                                        }}
                                        onClick={handleSubmit}
                                        >
                                              <DoneIcon />
                                        </IconButton>
                                    <Button onClick={handleClose} color="#01579b">
                                        Cancel
                                    </Button>
                                    </DialogActions>
                                    <Grid >
                                        </Grid>
                                        </Dialog>
                        <Button display="inline"   color="secondary" style={{fontSize:" 15px"}} onClick={handle} >
                                 
                        <SaveIcon/>  Save changes
                        </Button>
                        </div>
                                <Typography  style={{fontWeight: 'bold',fontSize: "22px"}}>General Information</Typography>
                                
                    
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}>Blood Type</Typography>
                                <Typography>{patientInfo.blood_type}</Typography>
                                <Grid container spacing={3}>
                                <Grid item xs={6}>
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}> Weight</Typography>
                                <Typography>{patientInfo.weight} kgs </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography style={{fontWeight: 'bold',fontSize: "17px"}}>Height</Typography>
                                <Typography style={{paddingBottom:'10px'}}>{patientInfo.height} cm</Typography>
                                </Grid>
                                </Grid>

                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                        <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Chronic Diseases and conditions</Typography>
                        <Button display="inline" onClick={handlediseaseclick} >
                            <AddCircleOutlineIcon/>
                        </Button>
                        </div>
                       {diseases.map(disease =>
                            <Typography > {"- "+disease.name} </Typography>)}
                            <div >
                            { diseasetemp===1? diseaseinputList.map((x, i) => {
                                return (
                                <div className="box">
                                <Grid container>
                                <Grid item xs={3}>
                                    <TextField
                                    name="disease"
                                    placeholder="Disease"
                                    value={x.opeartion_name}
                                    onChange={e => handleInputChange(e, i)}
                                    
                                    
                                    />
                                    </Grid>
                                    <Grid item xs={3} style={{paddingLeft:"20px"}}>
                                    <div className="btn-box">
                                    {diseaseinputList.length - 1 === i && <Button onClick={handleAddClick}><AddCircleOutlineIcon/></Button>}
                                    {diseaseinputList.length !== 1 && <Button
                                    
                                        onClick={() => handleRemoveClick(i)}><RemoveIcon/></Button>}
                                    </div>
                                    </Grid>
                                    </Grid>
                                </div>
                                );
                            }):null}
                            </div>
                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                        <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Allergies</Typography>
                        <Button display="inline" onClick={handleallergyclick} >
                            <AddCircleOutlineIcon/>
                        </Button>
                        </div>
                        {allergies.map(allergy =>
                        <Typography > {"- "+allergy.name} </Typography>)}
                        <div >
                            { allergytemp===1? allergyinputList.map((x, i) => {
                                return (
                                <div className="box">
                                <Grid container>
                                <Grid item xs={3}>
                                    <TextField
                                    name="allergy"
                                    placeholder="Allergy"
                                    value={x.allergy}
                                    onChange={e => handleAllergyInputChange(e, i)}
                                    />
                                    </Grid>
                                    <Grid item xs={3} style={{paddingLeft:"20px"}}>
                                    <div className="btn-box">
                                    {allergyinputList.length - 1 === i && <Button onClick={handleAllergyAddClick}><AddCircleOutlineIcon/></Button>}
                                    {allergyinputList.length !== 1 && <Button
                                       
                                        onClick={() => handleallergyRemoveClick(i)}><RemoveIcon/></Button>}
                                    </div>
                                    </Grid>
                                    </Grid>
                                </div>
                                );
                            }):null}
                            </div>

                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                       <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                        <Typography  display="inline"style={{fontWeight: 'bold',fontSize: "22px"}}>Latest Operations</Typography>
                        <Button display="inline" onClick={handleoperationclick} >
                            <AddCircleOutlineIcon/>
                        </Button>
                        </div>
                        {operations.map(operation =>
                        <Grid container spacing={3}>
                                <Grid item xs={6}>
                               <Typography >{"- "+ operation.operation_name} </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                <Typography>{ operation.operation_date}</Typography>
                                </Grid>
                                </Grid>
                                )}
                            <div >
                            { opeartiontemp===1? operationinputList.map((x, i) => {
                                return (
                                <div className="box">
                                <Grid container >
                                <Grid item xs={3}>
                                    <TextField
                                    name="operation_name"
                                    placeholder="Operation name"
                                    value={x.operation_name}
                                    onChange={e => handleOperationInputChange(e, i)}
                                    />
                                    </Grid>
                                    <Grid item xs={3} style={{paddingLeft:'20px'}}>
                                    <TextField  
                                    className="ml10"
                                    name="operation_date"
                                    type='date'
                                    placeholder="Operation Date"
                                    value={x.operation_date}
                                    onChange={e => handleOperationInputChange(e, i)}
                                    />
                                     </Grid>
                                     <Grid item xs={3} style={{paddingLeft:"30px"}}>
                                    <div className="btn-box">
                                    {operationinputList.length - 1 === i && <Button onClick={handleOperationAddClick}><AddCircleOutlineIcon/></Button>}
                                    {operationinputList.length !== 1 && <Button
                                        className="mr10"
                                        onClick={() => handleOpeationRemoveClick(i)}><RemoveIcon/></Button>}
                                    </div>
                                    </Grid>
                                    </Grid>
                                </div>
                                );
                            }):null}
                            </div>
                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Special Habits</Typography>
                        <Typography >- Smoking </Typography>
                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                       <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                        <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Current Medications and previous tests</Typography>

                                <Button  onClick={()=>history.push({pathname:`/PatientTests/${patient_id}`})}><FindInPageIcon/></Button>
                                </div>
                        <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>

                                <Typography style={{fontWeight: 'bold', fontSize: "30px", paddingBottom:'10px',paddingTop:'10px'}}>Family Medical History</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Chronic Diseases and conditions</Typography>
                                <Typography >  </Typography>
                        <Typography > {"- "+patientInfo.family_diseaeses} </Typography>
                                <Typography style={{paddingBottom:'10px'}}>----------------------------------------------------------------------------------------------------</Typography>
                                <Typography style={{fontWeight: 'bold',fontSize: "22px"}}>Allergies</Typography>
                                <Typography > {"- "+patientInfo.family_allergies} </Typography>

                               
                                

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


