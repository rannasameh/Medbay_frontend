import React ,{useEffect} from 'react';
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
import Checkbox from '@material-ui/core/Checkbox';
import Appointment from "../../Appointment";
import axios from 'axios';
import {useStyles} from './Styling';
import Sidebar from './Sidebar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import moment from 'moment'

let a=[]
let j=0
let g=[]
let currentdate=moment(new Date()).format('YYYY-MM-DD')

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


function createData(key, date,time, medicinename, pillscount, prescribedby, done, instructions) {
  return {
    key,
    date,
    time,
    medicinename,
    pillscount,
    prescribedby,
    done,
    instructions,
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
        <TableCell align="center">{row.medicinename}</TableCell>
        <TableCell align="center">{row.pillscount}</TableCell>
        <TableCell align="center">{row.prescribedby}</TableCell>
        <TableCell align="center">{row.done}</TableCell>
      </TableRow>

    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    key: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    medicinename: PropTypes.string.isRequired,
    pillscount: PropTypes.number.isRequired,
    prescribedby: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
  }).isRequired,
};

export default function CollapsibleTable() {
  const [checked, setChecked] = React.useState(false);
  const [medicationInfo, setMedInfo] = React.useState([]);
  const [rows, setRows] = React.useState([]);
  const sidebar_classes = useStyles();

  let id=localStorage.user
  useEffect(async () => {
    
  axios.post('http://localhost:5000/getmedications',{patient_id : id})
      .then(res => {
          setMedInfo(res.data.message)
          a=medicationInfo.filter(x=> x.start_date>currentdate )
         RowFormation()
      })
  },
  )
 
  
  function RowFormation(){
    setRows(
  a.map((r)=>
   createData(r.id,r.start_date,r.times,r.name,r.dosage,r.doctor_fname+" "+r.doctor_lname, 
   <Checkbox
   defaultChecked={checked}
   onChange={() => setChecked(!checked)}
   color="primary"
   inputProps={{ 'aria-label': 'secondary checkbox' }}
 />
 ,"fghjk")  
 )
    )
  }
  

  return (
    <div className={sidebar_classes.root}>
      <CssBaseline />
      <Sidebar />
      <main className={sidebar_classes.content}>
        <div className={sidebar_classes.appBarSpacer} />
        <Container maxWidth="lg" className={sidebar_classes.container}>

    <TableContainer component={Paper}>
     <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"#01579b"}} >
                
                Reminders

              </Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{backgroundColor: "#01579b"}}>
            
            <TableCell align="center" style={{color:"white"}}> Date </TableCell>
            <TableCell align="center" style={{color:"white"}}>Time</TableCell>
            <TableCell align="center" style={{color:"white"}}> Medicine's Name</TableCell>
            <TableCell align="center" style={{color:"white"}}>Pills Count</TableCell>
            <TableCell align="center" style={{color:"white"}}>Prescribed By</TableCell>
            <TableCell align="center" style={{color:"white"}}>Done</TableCell>
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {rows.map((row) => (
            <Row key={row.key} row={row} />
          ))}
        </TableBody>
      </Table>
      <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"#01579b"}} >
                Appointments
              </Typography>
      <Appointment />
    </TableContainer>
    </Container>
    </main>
    </div>
  );
}
