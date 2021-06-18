import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from"../Header";
import Footer from"../Footer";
import SignIn from"../SignIn";
const sections = [
    { title: 'Home', url: '#' },
    { title: 'About us', url: '#' },
    { title: 'Sevices', url: '#' },
    { title: 'Careers', url: '#' },
    { title: 'Contact us', url: '#' },
  
    
  ];

function SignInPage (){


    return(
        <React.Fragment >
          <CssBaseline />
          <Header title="MEDBAY" sections={sections}/>
          <SignIn/>
          <Footer title="MEDBAY" description="Bringing The future of healthcare" />
        </React.Fragment>
      );
}export default SignInPage;