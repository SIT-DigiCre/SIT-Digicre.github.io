import React from 'react';
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';
import './App.css'
import SlideViewer from './component/SlideViewer';
import ContentBlock from './component/ContentBlock';
import { CarouselItem } from './common';
import { Timeline } from 'react-twitter-widgets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass,faComments,faHandPeace } from '@fortawesome/free-solid-svg-icons'

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
          <Col md={11}>
            <img src="./logo.png" alt="logo" className="img-fluid"/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={9}>
            <SlideViewer carouselItemList={require('./json/slideview.json')} />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-5">
            <ContentBlock 
              title="デジクリとは" 
              text={"デジクリは、芝浦工業大学に所属するデジタルクリエーションサークルです。ゲーム制作をはじめ、アプリケーション開発などのプログラミング、イラスト制作、3Dモデリング、音楽制作、動画制作、Vtuber活動など、デジタルコンテンツの創作活動を行っています。\nPG班、イラスト班、3DCG班、DTM班、Movie班、XR班の６つがあり、それぞれが協力して作品をつくります。1人で複数の班に所属している人も多くいます。\n基本的に、企画を立てる→制作する→発表するという流れで活動しています。"}
            />
          </Col>
          <Col md={6} className="mt-5">
            <ContentBlock 
              title="活動理念" 
            >
              <ul style={{listStyle:'none'}}>
                <li>
                  <FontAwesomeIcon icon={faCompass} /> より良い作品を作れるように日々努力し
                </li>
                <li>
                  <FontAwesomeIcon icon={faComments} /> 自分の作品の発表をすることで、プレゼン能力を高め
                </li>
                <li>
                  <FontAwesomeIcon icon={faHandPeace} /> 楽しく、他人にとって魅力ある作品を作れるように励むこと
                </li>
              </ul>
            </ContentBlock>
            (↑明日リストに変える)
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-5">
            <ContentBlock>
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'sitdigicre'
                }}
                options={{
                  height: '500'
                }}
                />
            </ContentBlock>
          </Col>
          <Col md={6} className="mt-5">
            <ContentBlock 
              title={"お知らせ"} 
              text={"Websiteが新しくなった！"} 
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-5">
            <ContentBlock 
              title={"活動内容"} 
              text={"毎週月曜日に定例会を開催して集まっています。ここでは作品の進捗を話したり、好きなものを布教する講座やLT（Lightning Talks : 短いプレゼンテーション）を行ったりしています。学校で活動できない期間はclusterというSNSを使い、バーチャル空間で集まっていました。\n普段は、一緒にわいわいゲームをしたり、お題に沿って制作したものをそれぞれ評価して技術を高めたりしています。"} 
            />
            (↑明日企画制作・発表と合宿についての説明も書き足す)
          </Col>
          <Col md={6} className="mt-5">
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
