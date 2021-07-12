import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Multiselect } from "multiselect-react-dropdown";
import countries from "./countries"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TimeSlots from './TimeSlots'
import MenuItem from "@material-ui/core/MenuItem";
let working_hours_from
let working_hours_to
const days=["Saturday","Sunday","Monday","Tuesady","Wednesday","Thursady","Friday"]
const Speciality=["Allergists/Immunologists",
  "Anesthesiologists",
  "Cardiologists",
  "Colon and Rectal Surgeons",
  "Critical Care Medicine Specialists",
   " Dermatologists",
    "Diagnostic radiology",
   " Emergency medicine",
    "Endocrinologists",
   " Family medicine",
    "Gastroenterologists",
    "Geriatric Medicine Specialists",
    "Hematologists",
    "Hospice and Palliative Medicine Specialists",
    "Infectious Disease Specialists",
    "Nephrologists",
    "Medical genetics",
    "Neurology",
    "Obstetricians and Gynecologists",
    "Oncologists",
    "Ophthalmology",
    "Pathology",
    "Pediatrics",
    "Plastic Surgeons",
   " Physical medicine and rehabilitation",
    "Psychiatry",
    "Radiologists",
   " Surgery",
    "Urology"]
    function countryToFlag(isoCode) {
      return typeof String.fromCodePoint !== 'undefined'
        ? isoCode
            .toUpperCase()
            .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
        : isoCode;
    }
export default function Specialities(props) {
  function HandleChange(event){
    console.log(working_hours_from)
    const {name,value}=event.target
    props.fn(prevValue=>{
      return{ 
        ...prevValue,
      [name]:value}
    })
 if (name==='from')
 props.fn(prevValue=>{
  return{ 
    ...prevValue,
  clinic_working_hours_from:working_hours_from}
})
else  if (name==='to')
props.fn(prevValue=>{
 return{ 
   ...prevValue,
 clinic_working_hours_to:working_hours_to}
})
      }
     
       
      function Onselect(selectedList, selectedItem){
        props.fn(prevValue=>{
          return{ 
            ...prevValue,
            specialities:selectedList}
        })
        
        }
        function onRemove(selectedList, removedItem) {
          props.fn(prevValue=>{
            return{ 
              ...prevValue,
              specialities:selectedList}
          })
        }
        function Onselectdays(selectedList, selectedItem){
          props.fn(prevValue=>{
            return{ 
              ...prevValue,
              clinic_working_days:selectedList}
          })
          
          }
          function onRemovedays(selectedList, removedItem) {
            props.fn(prevValue=>{
              return{ 
                ...prevValue,
                clinic_working_days:selectedList}
            })
          }
          
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Speciality and certificates (*)
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <Multiselect
           style={ {chips: { background: "#01579b" }, searchBox: { border: "none", "border-bottom": "1px solid", "border-radius": "0px" }} }
          options={Speciality}
          isObject={false}
          onSelect={Onselect}
          onRemove={onRemove}
        />
        </Grid>
       
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            required
            id="AcedemicAchievment"
            name="latest_acdemic_achievment"
            label="Latest acedemic achievment"
            fullWidth
            autoComplete="Acedemic Achievment"
            style={{ paddingBottom: "15px" }}
            value={props.inputValues.latest_acdemic_achievment}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
          required
            id="YearsOfExperience"
            name="years_of_experience"
            label="Years of experience"
            fullWidth
            autoComplete="Years of Experience"
            value={props.inputValues.years_of_experience}
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Clinic information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="ClinicAddress1"
            name="clinic_street"
            label="Clinic Street"
            fullWidth
            autoComplete="Clinic Address1"
            value={props.inputValues.clinic_street}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ClinicAddress2"
            name="clinic_building"
            label="Clinic building"
            fullWidth
            autoComplete="Clinic Address2"
            value={props.inputValues.clinic_building}
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ClinicCity"
            name="clinic_city"
            label="Clinic City"
            fullWidth
            autoComplete=" address-level2"
            value={props.inputValues.clinic_city}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ClinicState"
            name="clinic_state"
            label="State/Province/Region"
            fullWidth
            value={props.inputValues.clinic_state}
            onChange={HandleChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ClinicZip"
            name="clinic_zip_code"
            label="Zip / Postal code"
            fullWidth
            autoComplete=" postal-code"
            value={props.inputValues.clinic_zip_code}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        value={props.inputValues.country}
        name="clinic_country"
        onChange={HandleChange}
        onSelect={HandleChange}
          {...params}
          label="Choose a country"
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
            required
            fullWidth
            id="ClinicPhoneNumber"
            label="Phone Number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+201</InputAdornment>
              )
            }}
            value={props.inputValues.clinic_phone_number}
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
        label="Working hours from (*)"
        name="from"
        value={props.inputValues.from}
        onChange={HandleChange}
        style={{ marginBottom:"10px"}}
      >
        {TimeSlots.map((option) => (
          <MenuItem value={option.label} onClick={()=> working_hours_from=option.value}> {option.label.slice("",8)} </MenuItem>
        ))}
      </TextField>
        </Grid>
        <Grid item xs={6} sm={6}>
        <TextField 
        fullWidth
        id="ClinicWorkingHoursto"
        select
        label="Working hours to (*)"
        name="to"
        value={props.inputValues.to}
        onChange={HandleChange}
        style={{ marginBottom:"10px"}}
      >
        {TimeSlots.map((option) => (
          <MenuItem value={option.label} onClick={()=> working_hours_to=option.value} > {option.label.slice("",8)} </MenuItem>

        ))}
      </TextField>
        </Grid>
      </Grid>
      
   <Typography  style={{ marginTop:"10px",paddingBottom:'10px'}}>Select working days (*)</Typography>
   <Grid container spacing={3} 
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
         }}>
        <Grid item xs={6} sm={6}>
      <Multiselect
          style={{ marginTop:"10px"}}
          options={days}
          isObject={false}
          onSelect={Onselectdays}
          onRemove={onRemovedays}
          
        />
      </Grid>
      </Grid>
     
    </React.Fragment>
  );
}

