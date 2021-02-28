import React from 'react';
import { Card } from 'react-bootstrap';

const ContentBlock: React.FC<Props> = (props) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title style={{ fontSize: 25 }}>{"- " + props.title + " -"}</Card.Title>
          {props.children}
          {props.text !== undefined &&
            <Card.Text>
              {props.text}
            </Card.Text>
          }
        </Card.Body>
      </Card>
    </div>
  );
}
interface IProp{
  title: string;
  text: string;
}
type Props = Partial<IProp>;

export default ContentBlock;