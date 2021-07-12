import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import MenuItem from "@material-ui/core/MenuItem";
import Upload from './Pages/Doctor/Pdf';

export default function AddressForm(props) {
  const accountType=["Doctor","Patient"]

function HandleChange(event){
const {name,value}=event.target
props.fn(prevValue=>{
  return{ 
    ...prevValue,
  [name]:value}
})

  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            fullWidth
          //   error
          // id="standard-error-helper-text"
          // label="Error"
          // defaultValue="Hello World"
          // helperText="Incorrect entry."
            id="Username"
            label="Username"
            name="username"
            autoComplete="Username"
            value={props.inputValues.username}
            onChange={HandleChange}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
        <TextField     
            id="accoutType"
            select
            fullWidth
            label="Account type"
            required
            onChange={HandleChange}
            name="AccountType"
            value={props.inputValues.AccountType}
          >
            {accountType.map((option) => (
              <MenuItem value={option}> {option} </MenuItem>
            ))}
          </TextField>
          </Grid>
          </Grid>

        <Grid  xs={12}>
          <TextField
          onChange={HandleChange}
            required
            fullWidth
            id="Email"
            label="Email Address"
            name="email"
            autoComplete="Email"
          value={props.inputValues.email}
          />
        </Grid>
        <Grid  xs={12}>
          <TextField
           onChange={HandleChange}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={props.inputValues.password}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          onChange={HandleChange}
            required
            fullWidth
            name="password_confirmation"
            label="ConfirmPassword"
            type="password"
            id="ConfirmPassword"
            autoComplete="current-password"
            value={props.inputValues.password_confirmation}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
        </Grid>
        <br/>
       <Grid>
      
       <Upload />
       </Grid>
         
      
    </React.Fragment>
  );
}
