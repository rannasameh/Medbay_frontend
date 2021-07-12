
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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Tooltip from '@material-ui/core/Tooltip';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import axios from 'axios'


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
   
  },
}))(TableRow);


function createData(name,email, md, phone, clinicaddress ) {
  return {
    name,
    email,
    md,
    phone,
    clinicaddress,
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
        <TableCell align="center">{row.md}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.clinicaddress}</TableCell>
      </TableRow>
    
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    md: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    clinicaddress: PropTypes.string.isRequired,
  }).isRequired,
};


export default function DTable() {
  const [doctors,setbackenddata]=React.useState([])
  const [rows, setRows] = React.useState([]);
  useEffect(async ()=> {
    axios.get('http://localhost:5000/getBannedDoctors')
    .then(res =>{
     setbackenddata(res.data.message)
     RowFormation()
    })
       
   })
   function RowFormation(){
    setRows(
  doctors.map((r)=>
   createData(r.first_name + " "+ r.last_name,r.email,r.phone_number, r.clinic_building+" "+r.clinic_street,r.clinic_city,r.clinic_country)  
 )
    )
  }
  return (
    <TableContainer component={Paper}>
    <br />
      <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
               Banned Accounts
              </Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{backgroundColor: "#01579b"}}>
          
            <TableCell align="center" style={{color:"white"}}> Name </TableCell>
            <TableCell align="center" style={{color:"white"}}>Email</TableCell>
            <TableCell align="center" style={{color:"white"}}>Phone Number</TableCell>
            <TableCell align="center" style={{color:"white"}}>Clinic's Address</TableCell>
            <TableCell align="center" style={{color:"white"}}>Clinic's Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
  );
}
