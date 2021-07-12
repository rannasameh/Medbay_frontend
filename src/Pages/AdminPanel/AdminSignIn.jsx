import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import MenuItem from "@material-ui/core/MenuItem";
import history from "./../../history";
const accountType=["Doctor","Patient"]
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [tempType, setTempType] = React.useState("");

  const [SignInFormat,SetSignInFormat]=React.useState({
    email:"",
    password:"",
   
  })
  const [SignInResponse,SetSignInResponse]=React.useState([])
  

  function SignInForm(event){
    const {name,value}=event.target;
   SetSignInFormat(prevValue =>{
    return{
     ...prevValue,
   [name]:value,};
  });
}
function handleChange(){
  {/*localStorage.setItem('email',SignInFormat.email);
  
localStorage.setItem('password', SignInFormat.password);*/}
if(SignInFormat.account_type==="")
    setAccountError(1)

    axios.post('http://localhost:5000/adminSignin',SignInFormat)
    .then(res =>{
      SetSignInResponse(res.data.user)
      if(res.data.message === "Invalid email or password")
      {
        setError(1)
      }
      else 
    {  
      let user_id=res.data.user.id
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user",user_id)
    history.push("/Home")
      
    }
  
})}
const [error,setError]=React.useState(0)
const [accountTypeError,setAccountError]=React.useState(0)
  return (
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
      <div className={classes.paper} >
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Admin Sign in 
        </Typography>
        <form className={classes.form} noValidate >
          <TextField
          onChange={SignInForm}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={SignInFormat.email}
          />
          <TextField
           onChange={SignInForm}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={SignInFormat.password}
          />
          {error?<span style={{color:"red",marginRight:"50px"}}>Invalid email or password</span>:<span> </span>}
   
          <Button
           onClick={handleChange}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}

          >
            Sign In
          </Button>
        
        </form>
      </div>
      
    </Container>
  );
}