import React from "react";
import { Card } from "react-bootstrap";
import { Property } from "csstype";

const ContentBlock: React.FC<Props> = (props) => {
  return (
    <Card className="h-100">
      <Card.Body>
        {props.title !== undefined && <Card.Title style={{ fontSize: 25 }}>{"- " + props.title + " -"}</Card.Title>}
        {props.children}
        {props.text !== undefined && (
          <Card.Text>
            <div style={{ whiteSpace: "pre-line" }}>{props.text}</div>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

interface IProp {
  title: string;
  text: string;
}
type Props = Partial<IProp>;

export default ContentBlock;
