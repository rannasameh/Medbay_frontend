// import React from "react";
// import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css"; 
// import { React15Tabulator } from "react-tabulator";

// const columns = [
//   { title: "Name", field: "name", width: 150 },
//   { title: "Age", field: "age", align: "left", formatter: "progress" },
//   { title: "Favourite Color", field: "col" },
//   { title: "Date Of Birth", field: "dob", align: "center" },
//   { title: "Rating", field: "rating", align: "center", formatter: "star" },
// //   { title: "Passed?", field: "passed", align: "center", formatter: "tickCross" }
// ];
// const data = [
//   {
//     id: 1,
//     name: "Oli Bob",
//     age: "12",
//     col: "red",
//     dob: "",
//     rating: 5,
//     // passed: true
//   },
//   {
//     id: 2,
//     name: "Mary May",
//     age: "1",
//     col: "green",
//     dob: "14/05/1989",
//     rating: 4,
//     // passed: true
//   },
//   {
//     id: 3,
//     name: "Christine Lobowski",
//     age: "42",
//     col: "green",
//     dob: "22/05/1985",
//     rating: 4,
//     // passed: false
//   },
//   {
//     id: 4,
//     name: "Brendon Philips",
//     age: "125",
//     col: "red",
//     dob: "01/08/1980",
//     rating: 4.5,
//     // passed: true
//   },
//   {
//     id: 5,
//     name: "Margret Marmajuke",
//     age: "16",
//     col: "yellow",
//     dob: "31/01/1999",
//     rating: 4,
//     // passed: false
//   },
//   {
//     id: 6,
//     name: "Van Ng",
//     age: "37",
//     col: "green",
//     dob: "06/15/1982",
//     rating: 4,
//     // passed: true
//   },
//   {
//     id: 7,
//     name: "Duc Ng",
//     age: "37",
//     col: "yellow",
//     dob: "10/15/1982",
//     rating: 4,
//     // passed: true
//   }
// ];

// // Editable Example:
// const colorOptions = {
//   [""]: "&nbsp;",
//   red: "red",
//   green: "green",
//   yellow: "yellow"
// };
// const editableColumns = [
//   {
//     title: "Name",
//     field: "name",
//     width: 150,
//     // editor: "input",
//     headerFilter: "input"
//   },
//   {
//     title: "Age",
//     field: "age",
//     align: "left",
//     formatter: "progress",
//     // editor: "progress"
//   },
// //   {
// //     title: "Favourite Color",
// //     field: "col",
// //     // editor: "autocomplete",
// //     // editorParams: {
// //     //   allowEmpty: true,
// //     //   showListOnEmpty: true,
// //     //   values: colorOptions
// //     // },
// //     headerFilter: "select",
// //     headerFilterParams: { values: colorOptions }
// //   },
//   { title: "Date Of Birth", field: "dob", align: "center" },
//   {
//     title: "Rating",
//     field: "rating",
//     align: "center",
//     formatter: "star",
//     // editor: true
//   },
// //   {
// //     title: "Passed?",
// //     field: "passed",
// //     align: "center",
// //     formatter: "tickCross",
// //     // editor: true
// //   }
// ];

// class Home extends React.Component {
//   state = {
//     data: []
//   };
//   ref = null;

//   rowClick = (e, row) => {
//     console.log("ref table: ", this.ref.table); // this is the Tabulator table instance
//     console.log("rowClick id: ${row.getData().id}", row, e);
//   };

//   setData = () => {
//     this.setState({ data });
//   };

//   clearData = () => {
//     this.setState({ data: [] });
//   };

//   render() {
//     const options = {
//       height: 150,
//       movableRows: true
//     };
//     return (
//       <div>
//         {/* <React15Tabulator
//           ref={ref => (this.ref = ref)}
//           columns={columns}
//           data={data}
//           rowClick={this.rowClick}
//           options={options}
//           data-custom-attr="test-custom-attribute"
//           className="custom-css-class"
//         />

//         <h3>
//           Asynchronous data: (e.g. fetch) -{" "}
//           <button onClick={this.setData}>Set Data</button>
//           <button onClick={this.clearData}>Clear</button>
//         </h3> */}
//         <React15Tabulator columns={columns} data={this.state.data} />

//         <h3>Editable Table</h3>
//         <React15Tabulator columns={editableColumns} data={data} />
//       </div>
//     );
//   }
// }

// export default Home;

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
import Checkbox from './Check';
import Rate from './Rate';



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


function createData(name,email, md, phone ,ratings) {
  return {
    name,
    email,
    md,
    phone,
    ratings,
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
        <Tooltip title="Send Warning" placement="right">
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
        <TableCell align="center" formatter="star">{row.ratings}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              {row.instructions}
              <Typography variant="h8" gutterBottom component="div" style = {{color:"MidnightBlue"}}>
                Send warning and complains
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
  }).isRequired,
};

const rows = [
  createData("hana","Hana@hana.com" ,'link', 24567,3),
  createData("hana","Hana@hana.com", 'link', 37455,3),
  createData("hana","Hana@hana.com", 'link', 24456,2),
  createData("hana","Hana@hana.com", 'link', 67675,1),
  createData("hana","Hana@hana.com", 'link', 49567,1),
];
export default function DTable() {

  return (
    <TableContainer component={Paper}>
    <br />
      <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
            Doctor's Raitings
              </Typography>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{backgroundColor: "#01579b"}}>
            <TableCell />
            <TableCell align="center" style={{color:"white"}}> Name </TableCell>
            <TableCell align="center" style={{color:"white"}}>Email</TableCell>
            <TableCell align="center" style={{color:"white"}}> Medical Degree</TableCell>
            <TableCell align="center" style={{color:"white"}}>Phone Number</TableCell>
            <TableCell align="center" formatter="star" style={{color:"white"}}>Ratings</TableCell>
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
