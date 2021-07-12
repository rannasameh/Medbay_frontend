import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    color: '#01579b',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:'#DBE9F3',
    color:'#01579b'
  },
}));

const tiers = [
  {
    title: 'Finding Doctors',
    description: ['Finding a doctor with your preferences such as location, specialty and rating only three clicks away!'],
  },
  {
    title: 'Booking an appointment',
    description: [
      'Booking an appoitntment with your desired doctor easily. Just choose your prefered timeslot and thats it!',
    ],
  },
  {
    title: 'MedBay Messagner',
    description: [
      'Connecting with other users through messages. Also, chatrooms with other patients having similar experiences, and much more! ',
    ],
  },
  {
    title: 'Appointments reminders',
    description: [
      'Set your appointments reminders in your appointments tab in your own profile!',
    ],
  },
  {
    title: 'Medication reminders',
    description: [
      'Tired of having to set your medications reminders manually? In Medbay, this is all done automatically!',
    ],
  },
  {
    title: 'Symtpoms Checker',
    description: [
        'AI based symptoms that will provide you with the most accurate diagnosis possible for your symptoms. Created for information purposes only.',
    ]
  },
];
export default function Services() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" style={{color:'#01579b'}} gutterBottom>
          Services
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" component="p">
          To attend all your needs as easily as possible, MedBay serves their users with a user-friendly interface.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}