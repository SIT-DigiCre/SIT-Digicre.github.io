import React from "react";
import { Card } from "react-bootstrap";

const ToyBox: React.FC<Props> = (props) => {
  const getContent = () => {
    const sum = 2;//作品数
    let n = Math.floor( Math.random()*sum );
    switch(n){
      case 0:
        return(
          <div>
            <video  className="card-img" src="./toybox/16th_shiba.mp4" controls></video>
          </div>
        );
      case 1:
        return(
          <div>
            <img className="card-img" src="./toybox/nagi_website.png" alt=""/>
          </div>
        );
    }
  }
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title style={{ fontSize: 25 }}><img src="./image/omochabako.png" className="img-fluid"/></Card.Title>
        <Card.Text>リロードするたびにランダムにコンテンツが切り替わります</Card.Text>
        {getContent()}
      </Card.Body>
    </Card>
  );
};

type Props = {};

export default ToyBox;
