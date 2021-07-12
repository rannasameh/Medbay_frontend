
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
// // import MaterialUIPickers from './Time';


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


// function createData(name,email, location, phone, registrationDate) {
//   return {
//     name,
//     email,
//     location,
//     phone,
//     registrationDate,
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
//         <Tooltip title="Reminders" placement="right">
//           <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//           </Tooltip>
//         </TableCell>
//         <StyledTableRow><TableCell component="th" scope="row">
//           {row.name}
//         </TableCell></StyledTableRow>
//         <TableCell align="center">{row.email}</TableCell>
//         <TableCell align="center">{row.location}</TableCell>
//         <TableCell align="center">{row.phone}</TableCell>
//         <TableCell align="center">{row.registrationDate}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box margin={1}>
//               {row.instructions}
//               <Typography variant="h8" gutterBottom component="div" style = {{color:"#233C67"}}>
//                 Extra Information 
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
//     location: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
//     registrationDate: PropTypes.string.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData("hana","no" , 6.0, 24,getCurrentDate()),
//   createData("hana","no", 9.0, 37,getCurrentDate()),
//   createData("hana","no", 16.0, 24,getCurrentDate()),
//   createData("hana","no", 3.7, 67,getCurrentDate()),
//   createData("hana","no", 16.0, 49,getCurrentDate()),
// ];
// export default function DTable() {

//   return (
//     <TableContainer component={Paper}>
//     <br />
//       <Typography variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
//                Patients
//               </Typography>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow style={{backgroundColor: "#01579b"}}>
//             <TableCell />
//             <TableCell align="center" style={{color:"white"}}> Name </TableCell>
//             <TableCell align="center" style={{color:"white"}}>Email</TableCell>
//             <TableCell align="center" style={{color:"white"}}> Location</TableCell>
//             <TableCell align="center" style={{color:"white"}}>Phone Number</TableCell>
//             <TableCell align="center" style={{color:"white"}}>Registration Date</TableCell>
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
// import React from 'react'

// import CssBaseline from '@material-ui/core/CssBaseline'
// import EnhancedTable from './Table/EnhancedTable'
// import makeData from './Dummy'

// const App = () => {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'First Name',
//         accessor: 'firstName',
//       },
//       {
//         Header: 'Last Name',
//         accessor: 'lastName',
//       },
//       {
//         Header: 'Age',
//         accessor: 'age',
//       },
//       {
//         Header: 'Gender',
//         accessor: 'Gender',
//       },
//       {
//         Header: 'Email',
//         accessor: 'Email',
//       },
//       {
//         Header: 'Phone Number',
//         accessor: 'Phone',
//       },
//     ],
//     []
//   )

//   const [data, setData] = React.useState(React.useMemo(() => makeData(20), []))
//   const [skipPageReset, setSkipPageReset] = React.useState(false)

//   const updateMyData = (rowIndex, columnId, value) => {

//     setSkipPageReset(true)
//     setData(old =>
//       old.map((row, index) => {
//         if (index === rowIndex) {
//           return {
//             ...old[rowIndex],
//             [columnId]: value,
//           }
//         }
//         return row
//       })
//     )
//   }

//   return (
//     <div>
//       <CssBaseline />
//       <EnhancedTable
//         columns={columns}
//         data={data}
//         setData={setData}
//         updateMyData={updateMyData}
//         skipPageReset={skipPageReset}
//       />
//     </div>
//   )
// }

// export default App

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

function createData(firstName, lastName, age, email, phonenumber) {
  return { firstName, lastName, age, email, phonenumber };
}

const rows = [
  createData('Cupcake', 'cupcake', 33, 'cupcake@cupcake.com', 4676767),
  createData('Donut', 'cupcake', 25, 'cupcake@cupcake.com', 4676767),
  createData('Eclair', 'cupcake', 16, 'cupcake@cupcake.com', 4676767),
  createData('Frozen yoghurt', 'cupcake', 61, 'cupcake@cupcake.com', 4676767),
  createData('Gingerbread', 'cupcake', 16, 'cupcake@cupcake.com', 4676767),
  createData('Honeycomb', 'cupcake', 31, 'cupcake@cupcake.com', 4676767),
  createData('Ice cream sandwich', 'cupcake', 90, 'cupcake@cupcake.com', 4676767),
  createData('Jelly Bean', 'cupcake', 56, 'cupcake@cupcake.com', 4676767),
  createData('KitKat', 'cupcake', 26, 'cupcake@cupcake.com', 4676767),
  createData('Lollipop', 'cupcake', 89, 'cupcake@cupcake.com', 4676767),
  createData('Marshmallow', 'cupcake', 98, 'cupcake@cupcake.com', 4676767),
  createData('Nougat', 'cupcake', 19, 'cupcake@cupcake.com', 4676767),
  createData('Oreo', 'cupcake', 18, 'cupcake@cupcake.com', 4676767),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'firstName', numeric: false, disablePadding: true, label: 'First Name' },
  { id: 'lastName', numeric: false, disablePadding: false, label: 'Last Name' },
  { id: 'age', numeric: true, disablePadding: false, label: 'Age' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'phonenumber', numeric: false, disablePadding: false, label: 'Phone Number' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all patients' }}
          /> */}
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
          hover
            key={headCell.id}
            style={{ color: '#01579b' }}
            align='center'
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
            style={{ color: '#01579b' }}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'dark'
      ? {
        color: theme.palette.primary.dark,
        backgroundColor: lighten(theme.palette.secondary.dark, 0.85),
      }
      : {
        color: theme.palette.text.dark,
        backgroundColor: '#01579b',
      },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <TableContainer component={Paper}>
      <Toolbar
      >
        <Typography className={classes.title} variant="h6" gutterBottom component="div"style = {{textAlign:"center" , color:"white", backgroundColor:"#01579b"}} >
              Patients
             </Typography>
      </Toolbar>
    </TableContainer>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
    color: '#01579b',
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('age');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            style={{ color: '#01579b' }}
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
            // color='#01579b'
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              // onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.firstName);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      // onClick={(event) => handleClick(event, row.firstName)}
                      // role="checkbox"
                      // aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.firstName}
                      // selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        {/* <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        /> */}
                      </TableCell>
                      <TableCell align='center' component="th" id={labelId} scope="row" padding="none" >
                        {row.firstName}
                      </TableCell>
                      <TableCell align="center" >{row.lastName}</TableCell>
                      <TableCell align="center">{row.age}</TableCell>
                      <TableCell align="center">{row.email}</TableCell>
                      <TableCell align="center">{row.phonenumber}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
