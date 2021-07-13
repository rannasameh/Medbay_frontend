import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import countries from "./countries"

export default function AddressForm(props) {
  function HandleChange(event){
    const {name,value}=event.target
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
      [name]:value}
    })
    
      }
      function countryToFlag(isoCode) {
        return typeof String.fromCodePoint !== 'undefined'
          ? isoCode
              .toUpperCase()
              .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
          : isoCode;
      }
 
  const MaritalStatus = ["Married", "Single", "Divorced", "Seperated"];
  const Gender=["Female","Male","Other"]
  return (
    <React.Fragment>
      <Typography  color="secondary" variant="h6" gutterBottom>
        General information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="first_name"
            label="First name"
            fullWidth
            autoComplete="First-name"
            value={props.inputValues.first_name}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="last_name"
            label="Last name"
            fullWidth
            autoComplete="Last-name"
            value={props.inputValues.last_name}
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            style={{ margin: 8 }}
            required
            margin="normal"
            id="Birthdate"
            label="Birthday Date"
            type="date"
            name="date_of_birth"
            fullWidth
            value={props.inputValues.date_of_birth}
            onChange={HandleChange}
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
        style={{ margin: 8 }}
            id="Gender"
            select
            fullWidth
            label="Gender *"
            name="gender"
            value={props.inputValues.gender}
            onChange={HandleChange}
           
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
            label="Street"
            fullWidth
            autoComplete="address-line1"
            value={props.inputValues.street}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="building"
            label="Building number *"
            fullWidth
            autoComplete="address-line2"
            value={props.inputValues.building}
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="City"
            value={props.inputValues.city}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            value={props.inputValues.state}
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip_code"
            label="Zip / Postal code"
            fullWidth
            autoComplete=" postal-code"
            value={props.inputValues.zip_code}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Autocomplete
      id="country"
      options={countries}
      autoHighlight
      fullWidth
      name="country"
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput={(params) => (
        <TextField
        value={props.inputValues.country}
        name="country"
        onChange={HandleChange}
        onSelect={HandleChange}
          {...params}
          label="Choose a country *"
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
            label="Phone Number"
            value={props.inputValues.phone_number}
            onChange={HandleChange}
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
            name="MaritalStatus"
            select
            fullWidth
            label="Marital Status *"
            name="marital_status"
            value={props.inputValues.marital_status}
            onChange={HandleChange}
          
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
            Emergency contact
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
          
            id="EmergencyfirstName"
            name="emergency_first_name"
            label="First name"
            fullWidth
            autoComplete="Emergency first Name"
            value={props.inputValues.emergency_first_name}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            
            id="EmergencylastName"
            name="emergency_last_name"
            label="Last name"
            fullWidth
            autoComplete="Emergency last name"
            value={props.inputValues.emergency_last_name}
            onChange={HandleChange}
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
            label="Phone Number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+201</InputAdornment>
              )
            }}
            value={props.inputValues.emergency_phone_number}
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
