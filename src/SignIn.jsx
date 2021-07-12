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
import history from './history';
import { validate } from 'email-validator';

const accountType = ["Doctor", "Patient"]
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
  const [errorValue, setErrorValue] = React.useState("");

  const [SignInFormat, SetSignInFormat] = React.useState({
    email: "",
    password: "",
    account_type: ''
  })
  const [SignInResponse, SetSignInResponse] = React.useState([])


  function SignInForm(event) {
    const { name, value } = event.target;
    SetSignInFormat(prevValue => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    if (value == "Patient") {
      setTempType("Patient");
    }
    else {
      setTempType("Doctor");
    }
  }
  function handleChange() {
    {/*localStorage.setItem('email',SignInFormat.email);
  
localStorage.setItem('password', SignInFormat.password);*/}

    if (SignInFormat.email !== "" && SignInFormat.password !== "" && SignInFormat.account_type !== "") {
      if (validate(SignInFormat.email)) {
        axios.post('http://localhost:5000/sessions', SignInFormat)
          .then(res => {
            SetSignInResponse(res.data.user)
            let user_id = res.data.user.id
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", user_id)
            if (tempType == "Patient") {
              history.push("/PatientDashboard/")
            }
            else {
              history.push("/DoctorDashboard/")
            }
          })
      }
      else {
        setErrorValue('Please enter valid email address!');
        return;
      }
    }
    else {
      setErrorValue("Please enter email, password, and choose account type!")
      return;
    }
  }
  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <TextField
                id="accoutType"
                select
                fullWidth
                label="type"
                required
                onChange={SignInForm}
                name="account_type"
                value={SignInFormat.account_type}
              >
                {accountType.map((option) => (
                  <MenuItem value={option}> {option} </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            onClick={handleChange}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}

          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Typography style={{ color: 'red' }}>
            {errorValue}
          </Typography>

        </form>
      </div>

    </Container>
  );
}