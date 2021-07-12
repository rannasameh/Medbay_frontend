
import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, darken, lighten} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Sidebar from './Sidebar.jsx'
import CssBaseline from '@material-ui/core/CssBaseline';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Fab} from '@material-ui/core';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import history from './../../history';
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import timeSlots from '../../TimeSlots.js';
let id=localStorage.user
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

function createData(date,time, patientname, patientprofile ,done) {
  return {
    date,time, patientname, patientprofile ,done
  };
}
function getCurrentDate(separator=''){
    let newDate = new Date()
      let date = newDate.getDate();
      let month = newDate.getMonth() + 1;
      let year = newDate.getFullYear();
      const myDate = newDate.getDate()+"/"+newDate.getUTCMonth()+"/"+newDate.getUTCFullYear();
    
      return myDate;
    };
  

   
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
        <TableCell align="center">{row.patientname}</TableCell>
        <TableCell align="center">{row.patientprofile}</TableCell>
        
        <TableCell align="center"></TableCell>
        <TableCell align="center"></TableCell>
        

      </TableRow>
      
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    patientname: PropTypes.string.isRequired,
    patientprofile: PropTypes.string.isRequired,
  }).isRequired,
};

export default function DTable() {
  useEffect(async () => {
    axios.post('http://localhost:5000/getappdoctor',{doctor_id : id})
        .then(res => {
          setpatientsInfo(res.data.message)
           RowFormation()
        })
    }
    )
  function RowFormation(){
    setRows(
      filterFn.fn(patientsInfo).map((r)=>
   createData(r.appointment_date,timeSlots[r.appointment_time].label,r.patient_fname+" "+r.patient_lname,
   <Fab size="small"  style={{backgroundColor: "#01579b",color:'white'}} onClick={()=>history.push({pathname:`/MedicalHistoryEdit/${r.patient_id}`})}> <PermIdentityIcon/></Fab>)  
  )
    )
  }
  const [patientsInfo, setpatientsInfo] = React.useState([]);
   const [rows, setRows] = React.useState([]);
   const [filterFn,setFilterFn]=React.useState({fn: items =>{return items;}})
   function handleSearch(e){
    let target=e.target
    setFilterFn({  
      fn: patientsInfo =>{
        if (target.value==="")
        return patientsInfo
        else 
        return patientsInfo.filter(x=> x.first_name.toLowerCase().includes(target.value))
      }}
    )
  }
  return (
    <div style={{display: 'flex',backgroundColor: 'white', fontFamily: "Arial",paddingTop:'80px'}}>
    <CssBaseline />
    <Sidebar />
    <TableContainer component={Paper}>
    <br />
    <div  style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
      }}>
    
    </div>
      <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
      Appointments
              </Typography>
           
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{backgroundColor: "#01579b"}}>
         
            <TableCell align="center" style={{color:"white"}}> Date </TableCell>
            <TableCell align="center" style={{color:"white"}}>Time</TableCell>
            <TableCell align="center" style={{color:"white"}}> Patient's Name</TableCell>
            
            {/* <TableCell align="center" style={{color:"white"}}>Phone Number</TableCell>
            <TableCell align="center" style={{color:"white"}}> Email</TableCell> */}
            <TableCell align="center" style={{color:"white"}}> Patient's Profile</TableCell>
            <TableCell align="center" style={{color:"white"}}></TableCell>
            <TableCell align="center" style={{color:"white"}}></TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {rows.map((row) => (
            <Row key={row.date} row={row} />
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
  );
}