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
import Badge from "@material-ui/core/Badge";
import { withStyles } from '@material-ui/core/styles'
import {Fab, Grid,} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import countries from "./../../countries"
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton'
let Ufirst_name
let Ulast_name
let Udate_of_birth=""
let Ugender=""
let Ustate=""
let Ubuilding=""
let Ustreet=""
let Ucity=""
let Uzip_code=""
let Ucountry=""
let Uphone_number=""
let Umarital_status=""
let Uemergency_first_name=""
let Uemergency_last_name=""
let Uemergency_phone_number=""
let Uheight=""
let Uweight=""
let Upassword=""
let Upassword_confirmation=""

let password
let password_confirmation
let first_name
let last_name
const date_of_birth=""
const gender=""
const street=""
const building=""
const city=""
const state=""
const zip_code=""
const country=""
const phone_number=""
const marital_status=""
const emergency_first_name=""
const emergency_last_name=""
const emergency_phone_number=""
const height=""
const weight=""
 
      function countryToFlag(isoCode) {
        return typeof String.fromCodePoint !== 'undefined'
          ? isoCode
              .toUpperCase()
              .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
          : isoCode;
      }
 
  const MaritalStatus = ["Married", "Single", "Divorced", "Seperated"];
  const Gender=["Female","Male","Other"]


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
    const [patientInfo, setPatientInfo] = React.useState([]);

    useEffect(async () => {
    axios.get(`http://localhost:5000/patients/1`)
        .then(res => {
            setLoading(false)
            setPatientInfo(res.data.message)
            Ufirst_name=patientInfo.patient_first_name
            Ulast_name=patientInfo.patient_last_name
            Udate_of_birth=patientInfo.date_of_birth
            Ugender=patientInfo.gender
            Ustreet=patientInfo.street
            Ubuilding=patientInfo.building
            Ucity=patientInfo.city
            Ustate=patientInfo.state
            Uzip_code=patientInfo.zip_code
            Ucountry=patientInfo.country
            Uphone_number=patientInfo.phone_number
            Umarital_status=patientInfo.marital_status
            Uemergency_first_name=patientInfo.emergency_first_name
            Uemergency_last_name=patientInfo.emergency_last_name
            Uemergency_phone_number=patientInfo.emergency_phone_number
            Uheight=patientInfo.height
            Uweight=patientInfo.weight
            Upassword=patientInfo.password
            Upassword_confirmation=patientInfo.password_confirmation
        })
    }
    )
    function HandleChange(event){
        const {name,value}=event.target
        setUpdatedData(prevValue=>{
          return{ 
            ...prevValue,
          [name]:value}
        })
        console.log(updatedData)
          }
function handleconfirm(){
          axios.put('http://localhost:5000/patients/1',updatedData)
          .then(res =>{
            console.log(res.data.message)
          })}
   const [stillLoading,setLoading]=React.useState(true)
   const [updatedData,setUpdatedData]=React.useState({
    password:Upassword,
    password_confirmation:Upassword_confirmation,
    first_name:Ufirst_name,
    last_name:Ulast_name,
    date_of_birth:Udate_of_birth,
    gender:Ugender,
    street:Ustreet,
    building:Ubuilding,
    city:Ucity,
    state:Ustate,
    zip_code:Uzip_code,
    country:Ucountry,
    phone_number:Uphone_number,
    marital_status:Umarital_status,
    emergency_first_name:Uemergency_first_name,
    emergency_last_name:Uemergency_last_name,
    emergency_phone_number:Uemergency_phone_number,
    height:Uheight,
    weight:Uweight,
  })
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Sidebar />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                <Typography  color="secondary" variant="h6" gutterBottom>
        Edit general information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ margin: 8 ,marginBottom:"10px"}}
            required
            id="firstName"
            name="first_name"
            fullWidth
            onChange={HandleChange}
          placeholder={patientInfo.patient_first_name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="last_name"
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            onChange={HandleChange}
          placeholder={patientInfo.patient_last_name}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ margin: 8 ,marginBottom:"10px"}}
            required
            margin="normal"
            id="Birthdate"
            type="date"
            name="date_of_birth"
            fullWidth
            onChange={HandleChange}
            placeholder={patientInfo.date_of_birth}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        style={{ margin: 8 }}
            id="Gender"
            style={{ margin: 8 ,marginBottom:"10px"}}
            select
            fullWidth
            name="gender"
            onChange={HandleChange}
            defaultValue = ""
          >
            {Gender.map((option) => (
              <MenuItem value={option}> {option} </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="street"
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            autoComplete="address-line1"
            onChange={HandleChange}
          placeholder={patientInfo.street}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="building"
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            autoComplete="address-line2"
            onChange={HandleChange}
          placeholder={patientInfo.building}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            autoComplete="City"
            onChange={HandleChange}
          placeholder={patientInfo.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            onChange={HandleChange}
          placeholder={patientInfo.state}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip_code"
            fullWidth
            style={{ margin: 8 ,marginBottom:"10px"}}
            autoComplete=" postal-code"
            onChange={HandleChange}
          placeholder={patientInfo.zip_code}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
      id="country"
      options={countries}
      autoHighlight
      fullWidth
      name="country"
      onChange={HandleChange}
      style={{ margin: 8 ,marginBottom:"10px"}}
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
        placeholder={patientInfo.country}
        name="country"
        onChange={HandleChange}
        onSelect={HandleChange}
          {...params}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'country', 
          }}
        />
      )}
    />
  
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            autoComplete="PhoneNumber"
            name="phone_number"
            required
            fullWidth
            id="PhoneNumber"
            style={{ margin: 8 ,marginBottom:"10px"}}
            onChange={HandleChange}
          placeholder={patientInfo.phone_number}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+201</InputAdornment>
              )
            }}
            
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="MaritalStatus"
            defaultValue = ""
            select
            fullWidth
            name="marital_status"
            onChange={HandleChange}
          style={{ margin: 8 ,marginBottom:"10px"}}
          >
            {MaritalStatus.map((option) => (
              <MenuItem value={option}> {option} </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography   color="secondary" variant="h6" style={{ marginTop: "5px" }}>
Change Password
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <TextField
           onChange={HandleChange}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
       fullWidth
       style={{ margin: 8 ,marginBottom:"10px"}}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
          onChange={HandleChange}
            name="password_confirmation"
            label="ConfirmPassword"
            type="password"
            id="ConfirmPassword"
            autoComplete="current-password"
           fullWidth
           style={{ margin: 8 ,marginBottom:"10px"}}
          />
        </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography   color="secondary" variant="h6" style={{ marginTop: "5px" }}>
Change Medical information
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
          <TextField
            style={{ margin: 8 ,marginBottom:"10px"}}
            autoComplete="Height"
            name="height"
            fullWidth
            id="Height"
            placeholder={patientInfo.height}           
             autoFocus
            style={{ margin: 8 ,marginBottom:"10px"}}
            onChange={HandleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">cm</InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            onChange={HandleChange}
            id="Weight"
            name="weight"
            placeholder={patientInfo.weight}
            style={{ margin: 8 ,marginBottom:"10px"}}
            autoComplete="Weight"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              )
            }}
          />
        </Grid>
        </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography   color="secondary" variant="h6" style={{ marginTop: "5px" }}>
            Emergency contact
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          onChange={HandleChange}
          placeholder={patientInfo.emergency_first_name}
            id="EmergencyfirstName"
            name="emergency_first_name"
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            autoComplete="Emergency first Name"
           
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="EmergencylastName"
            name="emergency_last_name"
            style={{ margin: 8 ,marginBottom:"10px"}}
            fullWidth
            autoComplete="Emergency last name"
            onChange={HandleChange}
          placeholder={patientInfo.emergency_last_name}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            autoComplete="EmergencyPhoneNumber"
            name="emergency_phone_number"
            fullWidth
            id="EmergencyPhoneNumber"
            style={{ margin: 8 ,marginBottom:"10px"}}
            onChange={HandleChange}
          placeholder={patientInfo.emergency_phone_number}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+201</InputAdornment>
              )
            }}
          
          />
        </Grid>
        <Grid item xs={6}>
        <IconButton
               fillwidth
               style={{ backgroundColor:"#01579b",
               borderRadius: "1px",color:'white' ,marginLeft:"300px",marginTop:"90px"
               }}
               onClick={handleconfirm}
             >
                Save Changes 
             </IconButton>
      </Grid>
      </Grid>

                </Container>
                
                <Box pt={4}>
                <Copyright />
                </Box>

            </main>
        </div>
    );
}


