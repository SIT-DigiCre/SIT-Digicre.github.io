import React from "react";
import { Card } from "react-bootstrap";

const ToyBox: React.FC<Props> = (props) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title style={{ fontSize: 25 }}><img src="./image/omochabako.png" className="img-fluid"/></Card.Title>
        <Card.Text>おもしろコンテンツを準備中です</Card.Text>
      </Card.Body>
    </Card>
  );
};

type Props = {};

export default ToyBox;
