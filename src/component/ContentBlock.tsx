import React from 'react';
import { Card } from 'react-bootstrap';

const ContentBlock: React.FC<Props> = (props) => {
  const style:Style = { whiteSpace: 'pre-line' };
  type Style = {whiteSpace: "pre-line" | "pre" | "inherit" | "initial" | "-moz-initial" | "revert" | "unset" | "-moz-pre-wrap" | "break-spaces" | "normal" | "nowrap" | "pre-wrap" | undefined};
  return (
    <div>
      <Card>
        <Card.Body>
          {props.title !== undefined &&
            <Card.Title style={{ fontSize: 25 }}>{"- " + props.title + " -"}</Card.Title>
          }
          {props.children}
          {props.text !== undefined &&
            <Card.Text>
              <div style={style}>
                {props.text}
              </div>
              
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