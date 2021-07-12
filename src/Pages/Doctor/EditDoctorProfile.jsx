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
import IconButton from '@material-ui/core/IconButton'
import history from './../../history';
import TimeSlots from "./../../TimeSlots"
import Button from '@material-ui/core/Button';

let starthour={ 
    value: 0,
    label: '08:30 AM - 09:00 AM'}
let endhour={ 
    value: 0,
    label: '08:30 AM - 09:00 AM'}
      function countryToFlag(isoCode) {
        return typeof String.fromCodePoint !== 'undefined'
          ? isoCode
              .toUpperCase()
              .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
          : isoCode;
      }
 
  const MaritalStatus = ["Married", "Single", "Divorced", "Seperated"];
  const Gender=["Female","Male"]


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
        axios.get(`http://localhost:5000/doctors/${id}`)
        .then(res => {
            setLoading(false)
            setPatientInfo(res.data.message)
             starthour=TimeSlots[res.data.message.clinic_working_hours_from]
             endhour=TimeSlots[res.data.message.clinic_working_hours_to]
        
           
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
  for (var propName in updatedData) {
    if (updatedData[propName] === "" || updatedData[propName] === undefined) {
      delete updatedData[propName];
    }
  }
          axios.put(`http://localhost:5000/doctors/${id}`,updatedData)
          .then(res =>{
              console.log(res.data.message)
            setLoading(false)
            history.push({pathname:'/DoctorProfile'})
          })
        
        }
   const [stillLoading,setLoading]=React.useState(true)
   const [updatedData,setUpdatedData]=React.useState({
    password:"",
    password_confirmation:"",
    first_name:"",
    last_name:"",
    date_of_birth:"",
    gender:"",
    street:"",
    building:"",
    city:"",
    state:"",
    zip_code:"",
    country:"",
    phone_number:"",
     marital_status:"",
     emergency_first_name:"",
     emergency_last_name:"",
     emergency_phone_number:"",
    clinic_street:"",
    clinic_building:"",
    clinic_city:"",
    clinic_state:"",
    clinic_zip_code:"",
    to:"",
    from:"",
    clinic_country:"",
    clinic_phone_number:"",
    clinic_working_days:[],
    clinic_working_hours_from:"",
    clinic_working_hours_to:""
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
          placeholder={patientInfo.first_name}
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
          placeholder={patientInfo.last_name}
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
      name="clinic_country"
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
        placeholder={patientInfo.clinic_country}
        name="clinic_country"
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
        <Typography   color="secondary" variant="h6" style={{ marginTop: "5px" }}>
        Edit clinic information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            
            style={{ margin: 8 ,marginBottom:"10px"}}

            id="ClinicAddress1"
            name="clinic_street"
            placeholder={patientInfo.clinic_street}
            fullWidth
            autoComplete="Clinic Address1"
            
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
                      style={{ margin: 8 ,marginBottom:"10px"}}

            id="ClinicAddress2"
            name="clinic_building"
            placeholder={patientInfo.clinic_building}

            fullWidth
            autoComplete="Clinic Address2"
            
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
                        style={{ margin: 8 ,marginBottom:"10px"}}

            id="ClinicCity"
            name="clinic_city"
            placeholder={patientInfo.clinic_city}

            fullWidth
            autoComplete=" address-level2"
         
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            id="ClinicState"
            style={{ margin: 8 ,marginBottom:"10px"}}

            name="clinic_state"
            placeholder={patientInfo.clinic_state}

            fullWidth
         
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
                        style={{ margin: 8 ,marginBottom:"10px"}}

            id="ClinicZip"
            name="clinic_zip_code"
            placeholder={patientInfo.clinic_zip_code}

            fullWidth
            autoComplete=" postal-code"
         
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
        <Autocomplete
      id="clinic_country"
      options={countries}
      autoHighlight
      fullWidth
      name="clinic_country"
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
        placeholder={patientInfo.clinic_country}
        style={{ margin: 8 ,marginBottom:"10px"}}

        name="clinic_country"
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
            autoComplete="ClinicPhoneNumber"
            name="clinic_phone_number"
            style={{ margin: 8 ,marginBottom:"10px"}}

            fullWidth
            id="ClinicPhoneNumber"
            placeholder={patientInfo.clinic_phone_number}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+201</InputAdornment>
              )
            }}
         
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} 
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
         }}>
        <Grid item xs={6} sm={6}>
          <TextField
        fullWidth
        id="ClinicWorkingHoursfrom"
        select
        placeholder={patientInfo.clinic_street}
        defaultValue = ""

        name="from"
        style={{ margin: 8 ,marginBottom:"10px"}}

        onChange={HandleChange}
        style={{ marginBottom:"10px"}}
      >
        {TimeSlots.map((option) => (
          <MenuItem value={option.label} onClick={()=> updatedData.from=option.value}> {option.label.slice("",8)} </MenuItem>
        ))}
      </TextField>
        </Grid>
        <Grid item xs={6} sm={6}>
        <TextField 
        fullWidth
        id="ClinicWorkingHoursto"
        select
        defaultValue = ""

        placeholder={patientInfo.clinic_street}
        style={{ margin: 8 ,marginBottom:"10px"}}

        name="to"
      
        onChange={HandleChange}
        
      >
        {TimeSlots.map((option) => (
          <MenuItem value={option.label} onClick={()=> updatedData.to=option.value} > {option.label.slice("",8)} </MenuItem>

        ))}
      </TextField>
        </Grid>
      </Grid>
      
    
     
      <Grid container spacing={3}>
        
        <Grid item xs={6}>
        <Button
               style={{ backgroundColor:"#01579b",
               borderRadius: "1px",color:'white' ,marginLeft:"1100px"
               }}
               onClick={handleconfirm}
             >
                Save Changes 
             </Button>
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


