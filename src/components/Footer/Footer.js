import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <p style={{color: "black"}}>Salsas Mari es un pequeño sitio de venta sobre salsas caseras, que se distribuyen por medio
                                        de un punto de reunion
            </p>
            <FooterLink href="#">Mostrar más...</FooterLink>
          </Column>
          <Column>
            <Heading>Redes Sociales</Heading>
            <FooterLink href="https://www.facebook.com/SalsasMari">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/salsas.mari/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  WhatsApp
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;