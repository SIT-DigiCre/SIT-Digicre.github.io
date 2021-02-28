import React from 'react';
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';
import './App.css'
import SlideViewer from './component/SlideViewer';
import ContentBlock from './component/ContentBlock';
import { CarouselItem } from './common';

const App: React.FC<Props> = (props) => {

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home"><img src='./logo.png' alt='logo' height={70} /></Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="https://core.digicre.net/blog/">デジコアブログ</Nav.Link>
          <Nav.Link href="https://digicre.net/welcome">新入生向けサイト</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col md='auto'>
            <img src="./logo.png" alt="logo" width={975} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md='auto'>
            <SlideViewer width={975} carouselItemList={require('./json/slideview.json')} />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <ContentBlock 
              title="デジクリとは" 
              text="デジクリをするところです。" 
            />
          </Col>
          <Col md={6}>
            <ContentBlock 
              title="活動理念" 
              text="進捗を進める子はえらい！" 
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ContentBlock 
              title={"Twitter"} 
            />
          </Col>
          <Col md={6}>
            <ContentBlock 
              title={"お知らせ"} 
              text={"Websiteが新しくなった！"} 
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <ContentBlock 
              title={"活動内容"} 
              text={"なんかつくって、なんか発表して、なんか褒められる！"} 
            />
          </Col>
          <Col md={6}>
            <ContentBlock 
              title={"おもちゃ箱"} 
              text={"デジクるしかねぇ！"} 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
type Props = {};

export default App;
