
import React from "react";
import styled from 'styled-components';
  
const Footer = () => {
  return (
    <FooterBox>
        <Row>
          <Column>
            <Heading>Placeholder</Heading>
            <FooterLink href="#">Placeholder</FooterLink>
            <FooterLink href="#">Placeholder</FooterLink>
            <FooterLink href="#">Placeholder</FooterLink>
            <FooterLink href="#">Placeholder</FooterLink>
          </Column>
          <Column>
            <Heading>Placeholder</Heading>
            <FooterLink href="#">Placeholder</FooterLink>
            <FooterLink href="#">Placeholder</FooterLink>
            <FooterLink href="#">Placeholder</FooterLink>
            <FooterLink href="#">Placeholder</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Jack Slater</FooterLink>
            <FooterLink href="#">Name</FooterLink>
            <FooterLink href="#">Name</FooterLink>
            <FooterLink href="#">Name</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#"><i className="fa fa-facebook-f"></i> Facebook</FooterLink>
            <FooterLink href="#"><i className="fa fa-instagram"></i> Instagram</FooterLink>
            <FooterLink href="#"><i className="fa fa-twitter"></i> Twitter</FooterLink>
            <FooterLink href="#"><i className="fa fa-youtube"></i> Youtube</FooterLink>
          </Column>
        </Row>
    </FooterBox>
  );
};

   
const FooterBox = styled.div`
  background-color: dodgerblue;
  position: relative;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction:column;  
`;
   

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
   
const Row = styled.div`
display: flex;
justify-content:space-evenly;
`;
   
const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: red;
      transition: all 0.2s ease-in;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;
export default Footer;