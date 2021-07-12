import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import Footer from '../Footer';
import about from "../Images/aboutus1.png"
import about2 from "../Images/aboutus2.png"
import security from "../Images/security.png"

const imgStyling = {
  width: '1000px', 
  height:'600px', 
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default function AboutUsPage() {

  return (
    <React.Fragment >

      <CssBaseline />
      <Container  maxWidth="lg">
        <Header title="MEDBAY" />
        <main>
        <img src={about} alt="About us picture" style={imgStyling} />
        <img src={about2} alt="About us picture" style={imgStyling} />
        <img src={security} alt="About us picture" style={imgStyling} />
        </main>
      </Container>
      <Footer title="MEDBAY" description="Bringing The future of healthcare" />
    </React.Fragment>
  );
}