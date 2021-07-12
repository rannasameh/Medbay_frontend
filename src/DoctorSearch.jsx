import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import ReactRoundedImage from "react-rounded-image";
import Rating from '@material-ui/lab/Rating';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import BookPage from '../src/Pages/BookPage';
import Button from '@material-ui/core/Button';
import history from './history';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: 400,
    height: 270,
    position: 'relative',
    border: `2px solid #01579b `,
    borderRadius: 25,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },

  
}));

export default function ComplexGrid(props) {
  const classes = useStyles();
let doctor=props.doctor
  return (

    <div className={classes.root} >
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ReactRoundedImage image={'https://pngimg.com/uploads/doctor/doctor_PNG15988.png'} roundedSize="0" imageWidth="110" imageHeight="110" />
            <Rating name="read-only" value={props.rating} readOnly size="small" style={{paddingTop:"40px",paddingLeft:'20px'}} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
              <Typography gutterBottom variant="h5" component="h2">
                  {props.title}
                </Typography>
                <Typography gutterBottom variant="subitle1" style={{ color: "#757575" , marginLeft:'10px' }}>
                  {props.description}
                </Typography>
              </Grid>
              <div style={{
                flexWrap: 'wrap',position:"absolute",top: "100px"
            }}>
              <LocationOnIcon  fontSize="small" style={{ color: "#01579b", marginLeft:'20px' }}/>
              <span  variant="subtitle2" >
             {props.address}
                </span>
              </div>
              <div style={{
                flexWrap: 'wrap',
            }}>
              <PhoneIcon  fontSize="small" style={{ color: "#01579b", marginLeft:'20px'}}/>
              <span  variant="subtitle2" >
               {props.clinic_phone_number}
                </span>
              </div>
  
              <Grid item>
            
              <CardActions>
                <BookPage doctor={doctor}/>
              </CardActions>
              </Grid>
            </Grid>
            </Grid>
          </Grid>
       
      </Paper>
    
    </div>
  );
}
