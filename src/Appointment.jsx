
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, darken, lighten} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import moment from 'moment'

import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import TimeSlots from "./TimeSlots"
import Button from '@material-ui/core/Button';
import history from './history';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
let a=[]
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


function createData(date,time, Doctorsname, clinicname, done) {
  return {
    date,
    time,
    Doctorsname,
    clinicname,
    done,
  };
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        
        <StyledTableRow><TableCell component="th" scope="row">
          {row.date}
        </TableCell></StyledTableRow>
        <TableCell align="center">{row.time}</TableCell>
        <TableCell align="center">{row.Doctorsname}</TableCell>
        <TableCell align="center">{row.clinicname}</TableCell>
    
        <TableCell align="center"></TableCell>
        <TableCell align="center">{row.done}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {row.instructions}
              <Typography variant="h8" gutterBottom component="div" style = {{color:"#01579b"}}>
                Reminders
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    Doctorsname: PropTypes.string.isRequired,
    clinicname: PropTypes.number.isRequired,
  }).isRequired,
};
let currentdate=moment(new Date()).format('YYYY-MM-DD')
let id=localStorage.user
export default function DTable(props) {
  const [checked, setChecked] = React.useState(false);
  const [AppointmentInfo, setAppointmentInfo] = React.useState([]);
  const [rows2, setRows2] = React.useState([]);
  useEffect(async () => {
    axios.post('http://localhost:5000/getapp',{patient_id : id})
          .then(res => {
              setAppointmentInfo(res.data.message)
    a=AppointmentInfo.filter(x=> x.appointment_date>currentdate )
     
     RowFormation2()
          })
    }
    )
    function RowFormation2(){
      setRows2(
         a.map((r)=>
      createData(r.appointment_date,TimeSlots[r.appointment_time].label,
       <Button onClick={()=>history.push({pathname:`/ViewDoctorProfile/${r.doctor_id}`})} color="primary">{r.doctor_fname } {r.doctor_lname} </Button> 
        ,
       <Checkbox
      defaultChecked={checked}
      onChange={() => setChecked(!checked)}
      color="primary"
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />)  
    )
       )
   
     }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{backgroundColor: "#01579b"}}>
            <TableCell align="center" style={{color:"white"}}> Date </TableCell>
            <TableCell align="center" style={{color:"white"}}>Time</TableCell>
            <TableCell align="center" style={{color:"white"}}> Doctor</TableCell>
            <TableCell align="center" style={{color:"white"}}>Done</TableCell>
            <TableCell align="center" style={{color:"white"}}></TableCell>
            <TableCell align="center" style={{color:"white"}}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {rows2.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}
