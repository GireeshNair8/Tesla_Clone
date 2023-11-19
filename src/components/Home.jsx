import React from "react";
import styled from "styled-components";
import Section from "./Section";
import Footer from "./Footer";
import { Nav } from "react-bootstrap";
function Home() {
  return (
    <Container>
      <Nav style={{position:"fixed", width:"100%"}}>
        <p style={{fontSize:"15px", color:"white", backgroundColor:"rgb(28,38,66)", padding:"15px", fontFamily:"poppins"}}>
          <span style={{fontSize:"18px", color:"white", fontWeight:"bold"}}>$7,500 Federal Tax Credit for Certain Tesla Models</span>
           &nbsp; &nbsp; &nbsp; Reductions likely for certain vehicles in 2024. Take delivery by 12/31 for full $7,500. <span style={{textDecoration:"underline",fontSize:"15px", color:"white"}}>Eligibility Details</span></p>
      </Nav>
        <Section
        title="Model Y"
        description="Lease starting at $399/mo*"
        backgroundImg="source.gif"
        leftBtnTxt="Order Now"
        rightBtnTxt="Demo Drive"
      />
       <Section
        title="Model 3"
        description="Lease starting at $329/mo"
        backgroundImg="model-3.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Demo Drive"
      />
       <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Demo Drive"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnTxt="Order Now"
        rightBtnTxt="Demo Drive"
      />
      <Section
        title="Experience Tesla"
        description="Schedule A Demo Drive Today"
        backgroundImg="Drift.gif"
        leftBtnTxt="Shop now"
      />
     
      <Section
        title="Solar Panels"
        description="Schedule A Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnTxt="Order  Now"
        rightBtnTxt="Learn More"
      />
      <Section
        title="Solar Roof "
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnTxt="Order  Now"
        rightBtnTxt="Learn More"
      />
      <Section
        title="Powerwall"
        description=""
        backgroundImg="Powerwall.webp"
        leftBtnTxt="Order  Now"
        rightBtnTxt="Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="Charging_web.webp"
        leftBtnTxt="Shop now"
      />
      <Footer/>
    </Container>
    
    
  );
}

export default Home;

//Container
const Container = styled.div`
  height: 100vh;
`;