import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC<Props> = () => {
  const footerStyle: Style = {
    backgroundColor: "#C6C6C6",
  };
  const copyrightStyle: Style = {
    backgroundColor: "#C6C6C6",
  };
  type Style = {
    [key: string]: string;
  };

  return (
    <div>
      <Navbar style={footerStyle}>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Navbar.Brand>
                <img src="./logo-black.png" alt="logo-black" className="img-fluid"></img>
              </Navbar.Brand>
            </Col>
            <Col xs={12} md={6}>
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  デジクリへのご質問・ご相談は以下の連絡先でお願いします。<br></br>
                  <FontAwesomeIcon icon={faTwitterSquare} /> <a href="https://twitter.com/sitdigicre">@sitdigicre</a>
                  <br></br>
                  <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:contact@digicre.net">contact@digicre.net</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Navbar className="justify-content-center" style={copyrightStyle}>
        <Navbar.Brand>&copy; 2021 芝浦工業大学 デジクリ</Navbar.Brand>
      </Navbar>
    </div>
  );
};

type Props = {};

export default Footer;
