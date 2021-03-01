import React from 'react';
import { Nav, Navbar, Container, Col, Row } from 'react-bootstrap';
import './App.css'
import SlideViewer from './component/SlideViewer';
import ContentBlock from './component/ContentBlock';
import ToyBox from './component/ToyBox';
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
              text={"デジクリは、芝浦工業大学に所属するデジタルクリエーションサークルです。ゲーム制作をはじめ、アプリケーション開発などのプログラミング、イラスト制作、3Dモデリング、音楽制作、動画制作、Vtuber活動など、デジタルコンテンツの創作活動を行っています。\n\nPG班、イラスト班、3DCG班、DTM班、Movie班、XR班の６つがあり、それぞれが協力して作品をつくります。1人で複数の班に所属している人も多くいます。\n\n基本的に、企画を立てる→制作する→発表するという流れで活動しています。"}
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
            >
              <h1>やばいわよ！</h1>
              <p>3/1/2021 - デジクリ新HP爆誕だよ！</p>
              {/* ここにお知らせコンポーネントを入れるのだろうか */}
              {/* 日付 - やったこと という形式でやりたいね*/}
            </ContentBlock>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="mt-5">
            <ContentBlock 
              title={"活動内容"} 
            >
              <p>毎週月曜日に定例会を開催して集まっています。ここでは作品の進捗を話したり、好きなものを布教する講座や<b>LT（Lightning Talks : 短いプレゼンテーション）</b>を行ったりしています。学校で活動できない期間はclusterというSNSを使い、バーチャル空間で集まっていました。</p>
              <p>普段は、一緒にわいわいゲームをしたり、お題に沿って制作したものをそれぞれ評価して技術を高めたりしています。</p>
              <br></br>
              <h3>企画作成・発表</h3>
              <p>前期と後期の２回行っています。企画発表でやりたいことを発信して、メンバーを募集します。そして協力して制作し、中間発表を経て、最終発表で成果を披露します。個人で制作した方も発表することができます。</p>
              <br></br>
              <h3>合宿</h3>
              <p>８月に夏合宿、2月に冬合宿を行います。合宿中には様々な講座が行われ、技術を向上させたり、交流を深めたりすることができます。2020年度はオンラインで集まるエア合宿を開催しました。</p>
            {/*HTMLを直書きするのはかなり品がないと私も思うが、可読性を犠牲にtextに以上の文を一行で書くという私の邪悪な代案よりかはマシだと思いたい*/}
            {/*上記の文は別のスクリプトに書いてここ（app.tsx）の処理は一文で済ませたいですね。未来の自分がなんとかしてくれるでしょう。 */}
            </ContentBlock>
          </Col>
          <Col md={6} className="mt-5">
            <ContentBlock 
              title={"おもちゃ箱"}
            >
              <h3>ランダムで面白いものが出てくるよ！</h3>
              {/* htmlタグのテストです */}
            </ContentBlock>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
type Props = {};

export default App;
