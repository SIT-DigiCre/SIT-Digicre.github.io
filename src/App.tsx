import React, { useState } from "react";
import { Nav, Navbar, Container, Col, Row, Button, OverlayTrigger, Popover } from "react-bootstrap";
import "./App.css";
import SlideViewer from "./component/SlideViewer";
import ContentBlock from "./component/ContentBlock";
import ActivitiesBlock from "./component/ActivitiesBlock";
import Footer from "./component/Footer";
import NoticeList from "./component/NoticeList";
import ToyBox from "./component/ToyBox";
import { CarouselItem } from "./common";
import { Timeline } from "react-twitter-widgets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faComments, faHandPeace } from "@fortawesome/free-solid-svg-icons";

const App: React.FC<Props> = (props) => {
  const [showNoticeList, setShowNoticeList] = useState(false);
  const buttonStyle: Style = {
    padding: "25px 0px",
  };

  const navbarBtnOnClick = () => {};
  type Style = {
    [key: string]: string;
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
        <Navbar.Brand href="#home">
          <img src="./logo.png" alt="logo" height={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://blog.digicre.net/">デジコアブログ</Nav.Link>
            <Nav.Link href="https://digicre.net/welcome">新入生向けサイト</Nav.Link>
            <Nav.Link href="https://twitter.com/sitdigicre" target="_blank" rel="noopener noreferrer">Twitter</Nav.Link>
            <Nav.Link href="https://www.youtube.com/@sitdigicre" target="_blank" rel="noopener noreferrer">YouTube</Nav.Link>
          </Nav>
          <Nav>
            <OverlayTrigger
              trigger="click"
              key="bottom"
              placement="bottom"
              overlay={
                <Popover id={`popover-positioned-bottom`}>
                  <Popover.Content>
                    <a href="https://core3.digicre.net" style={{ fontSize: 20 }}>
                      <img src="./image/digicore.png" alt={"digicore"} style={{ height: 20 }} /> デジコア
                    </a>
                  </Popover.Content>
                </Popover>
              }
            >
              <Button variant="secondary">部員向けリンク</Button>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={11}>
            <img src="./logo.png" alt="logo" className="img-fluid" />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={9}>
            <SlideViewer carouselItemList={require("./json/slideview.json")} />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-5">
            <ContentBlock
              title="デジクリとは"
              text={`デジクリは、芝浦工業大学に所属するデジタルクリエーションサークルです。ゲーム制作をはじめ、アプリケーション開発などのプログラミング、イラスト制作、3Dモデリング、音楽制作、動画制作、Vtuber活動など、デジタルコンテンツの創作活動を行っています。

PG班、イラスト班、3DCG班、DTM班、Movie班、XR班の６つがあり、それぞれが協力して作品をつくります。1人で複数の班に所属している人も多くいます。

基本的に、企画を立てる→制作する→発表するという流れで活動しています。`}
            />
          </Col>
          <Col md={6} className="mt-5">
            <ContentBlock title="活動理念">
              <ul style={{ listStyle: "none", fontSize: 16, paddingLeft: 0 }}>
                <li className="mt-1">
                  <FontAwesomeIcon icon={faCompass} /> より良い作品を作れるように日々努力し
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon icon={faComments} /> 自分の作品の発表をすることで、プレゼン能力を高め
                </li>
                <li className="mt-1">
                  <FontAwesomeIcon icon={faHandPeace} /> 楽しく、他人にとって魅力ある作品を作れるように励むこと
                </li>
              </ul>
            </ContentBlock>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-5">
            <ContentBlock>
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "sitdigicre",
                }}
                options={{
                  height: "500",
                }}
              />
            </ContentBlock>
          </Col>
          <Col md={6} className="mt-5">
            <ContentBlock title={"お知らせ"}>
              <NoticeList noticesItemList={require("./json/notices.json")} />
            </ContentBlock>
          </Col>
        </Row>
        {showNoticeList && <Row></Row>}
        <Row>
          <Col md={6} className="mt-5">
            <ActivitiesBlock />
          </Col>
          <Col md={6} className="mt-5">
            <ToyBox />
          </Col>
        </Row>
        {/* ここから新入生向けサイトに飛ぶボタン */}
        <Row className="justify-content-center mb-5">
          <Col md={6} className="mt-5">
            <Button href="https://digicre.net/welcome/" variant="success" size="lg" style={buttonStyle} block>
              入部希望者の方はこちらへ（新入生向けサイトへ飛びます）
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
type Props = {};

export default App;
