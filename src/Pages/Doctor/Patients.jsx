
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

function createData(name,email, location, phone, registrationDate ,done) {
  return {
    name,
    email,
    location,
    phone,
    registrationDate,
    done,
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
          {row.name}
        </TableCell></StyledTableRow>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.location}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.registrationDate}</TableCell>
        <TableCell align="center">{row.done}</TableCell>
      </TableRow>
      
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    registrationDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default function DTable() {
  useEffect(async () => {
    axios.post('http://localhost:5000/getPatients',{doctor_id : id})
        .then(res => {
          setpatientsInfo(res.data.message)
           RowFormation()
        })
    }
    )
  function RowFormation(){
    setRows(
      filterFn.fn(patientsInfo).map((r)=>
   createData(r.first_name+" "+r.last_name,r.date_of_birth,r.gender,r.phone_number,r.email,
   <Fab size="small"  style={{backgroundColor: "#01579b",color:'white'}} onClick={()=>history.push({pathname:`/MedicalHistoryEdit/${r.id}`})}> <PermIdentityIcon/></Fab>)  
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
    <SearchIcon /> 
    <TextField label='Search for patient' style={{paddingBottom:'10px',paddingLeft:'10px'}} onChange={handleSearch} name="Patientname"  />
    </div>
      <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
      Patients
              </Typography>
           
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{backgroundColor: "#01579b"}}>
         
            <TableCell align="center" style={{color:"white"}}> Name </TableCell>
            <TableCell align="center" style={{color:"white"}}>Birth Date</TableCell>
            <TableCell align="center" style={{color:"white"}}> Gender</TableCell>
            <TableCell align="center" style={{color:"white"}}>Phone Number</TableCell>
            <TableCell align="center" style={{color:"white"}}> Email</TableCell>
            <TableCell align="center" style={{color:"white"}}> Profile</TableCell>
           
           
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
  );
}
