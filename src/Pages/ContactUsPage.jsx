import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';
import contactus from '../Images/contactus.png'





let id=localStorage.user

const imgStyling = {
  width: '1000px', 
  height:'600px', 
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default function ContactUsPage() {

  return (
    <React.Fragment >

      <CssBaseline />
      <Container  maxWidth="lg">
        <Header title="MEDBAY" />
        <main>
        <a href="mailto:medbayweb@outlook.com">
        <img src={contactus} alt="Contact us picture" style={imgStyling} />
        </a>
        </main>
      </Container>
      <Footer title="MEDBAY" description="Bringing The future of healthcare" />
    </React.Fragment>
  );
}