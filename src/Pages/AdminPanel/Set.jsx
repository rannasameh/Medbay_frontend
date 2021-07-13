import React ,{useEffect}from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@material-ui/core';
import axios from 'axios';

const states = [
  {
    value: 'Alexandria',
    label: 'Alexandria'
  },
  {
    value: 'Cairo',
    label: 'Cairo'
  },
];
let id=localStorage.user

const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Admin',
    lastName: 'Admin',
    email: '',
    phone: '',
    state: 'Alexandria',
    country: 'Egypt'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
  const [AdminInfo, setAdminInfo] = React.useState([]);
  const [stillLoading,setLoading]=React.useState(true)

  useEffect(async () => {
    axios.get(`http://localhost:5000/admins/${id}`)
    .then(res => {
        setLoading(false)
        setAdminInfo(res.data.message)
    
    })
    
  }
  )
  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label='First Name'
                name="firstName"
              
                onChange={handleChange}
                
                placeholder={AdminInfo.first_name}
             
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the last name"
                name="lastName"
                label="Last Name"
                onChange={handleChange}
                
                placeholder={AdminInfo.last_name}
                
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                placeholder={AdminInfo.email}
                variant="outlined"
              />
            </Grid>
          
          
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                placeholder={AdminInfo.phone_number}
                name="phone"
                onChange={handleChange}
                type="number"
               
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                name="country"
                label="Country"
                onChange={handleChange}
                placeholder={AdminInfo.country}
                variant="outlined"
              />
            </Grid>
         
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
        </Box>
      </Card>
    </form>
  );
};

export default AccountProfileDetails;
