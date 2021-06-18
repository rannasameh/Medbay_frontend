
// import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
// import { withStyles, makeStyles, darken, lighten} from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Tooltip from '@material-ui/core/Tooltip';
// import Checkbox from './Check';


// const useRowStyles = makeStyles({
//   root: {
//     '& > *': {
//       borderBottom: 'unset',
//     },
//   },
// });
// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);


// function createData(name,email) {
//   return {
//     name,
//     email,
//   };
// }
// function getCurrentDate(separator=''){
//     let newDate = new Date()
//       let date = newDate.getDate();
//       let month = newDate.getMonth() + 1;
//       let year = newDate.getFullYear();
//       const myDate = newDate.getDate()+"/"+newDate.getUTCMonth()+"/"+newDate.getUTCFullYear();
    
//       return myDate;
//     };

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();
  

//   return (
//     <React.Fragment>
//       <TableRow className={classes.root}>
//         <TableCell>
//         <Tooltip title="Complain" placement="right">
//           <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//           </Tooltip>
//         </TableCell>
//         <StyledTableRow><TableCell component="th" scope="row">
//           {row.name}
//         </TableCell></StyledTableRow>
//         <TableCell align="center">{row.email}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>
//               {row.instructions}
//               <Typography variant="h8" gutterBottom component="div" style = {{color:"#233C67"}}>
//                 Complain 
//               </Typography>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData("hana","no"),
//   createData("hana","no"),
//   createData("hana","no"),
//   createData("hana","no"),
//   createData("hana","no"),
// ];
// export default function DTable() {

//   return (
//     <TableContainer component={Paper}>
//     <br />
//       <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
//                Banned Accounts
//               </Typography>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow style={{backgroundColor: "#01579b"}}>
//             <TableCell />
//             <TableCell align="center" style={{color:"white"}}> Name </TableCell>
//             <TableCell align="center" style={{color:"white"}}>Email</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody align="center">
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
      
//     </TableContainer>
//   );
// }


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
        <TableCell>
        <Tooltip title="Complain" placement="right">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          </Tooltip>
        </TableCell>
        <StyledTableRow><TableCell component="th" scope="row">
          {row.name}
        </TableCell></StyledTableRow>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.md}</TableCell>
        <TableCell align="center">{row.phone}</TableCell>
        <TableCell align="center">{row.clinicaddress}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {row.instructions}
              <Typography variant="h8" gutterBottom component="div" style = {{color:"#01579b"}}>
                Complain: blah blah blahhhhh
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
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    md: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    clinicaddress: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData("hana","Hana@hana.com" ,'link', 24567, 'Alexandria,Egypt'),
  createData("hana","Hana@hana.com", 'link', 37455, 'Alexandria,Egypt'),
  createData("hana","Hana@hana.com", 'link', 24456, 'Alexandria,Egypt'),
  createData("hana","Hana@hana.com", 'link', 67675, 'Alexandria,Egypt'),
  createData("hana","Hana@hana.com", 'link', 49567, 'Alexandria,Egypt'),
];
export default function DTable() {

  return (
    <TableContainer component={Paper}>
    <br />
      <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
               Banned Accounts
              </Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{backgroundColor: "#01579b"}}>
            <TableCell />
            <TableCell align="center" style={{color:"white"}}> Name </TableCell>
            <TableCell align="center" style={{color:"white"}}>Email</TableCell>
            <TableCell align="center" style={{color:"white"}}> Medical Degree</TableCell>
            <TableCell align="center" style={{color:"white"}}>Phone Number</TableCell>
            <TableCell align="center" style={{color:"white"}}>Clinic's Address</TableCell>
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
