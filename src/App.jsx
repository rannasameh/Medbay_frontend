import React from "react";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Routes from "./Routes";
import { BrowserRouter as Router } from 'react-router-dom';




const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#01579b",
    },
    secondary: {
     
      main: "#01579b",
    },
  },
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
 <Router>
                <div>
               
                    <Routes />
                </div>
            </Router> 
     </ThemeProvider>
  );
}

export default App;