import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';
import contactus from '../Images/contactus.png'
import Services from './Services';




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
        <Services />
        </main>
      </Container>
      <Footer title="MEDBAY" description="Bringing The future of healthcare" />
    </React.Fragment>
  );
}